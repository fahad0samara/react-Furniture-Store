import React from 'react';
import { Upload, X } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  accept?: string;
  maxSize?: number;
  preview?: boolean;
}

export default function FileUpload({
  onFileSelect,
  accept = 'image/*',
  maxSize = 5 * 1024 * 1024, // 5MB
  preview = true,
}: FileUploadProps) {
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > maxSize) {
      setError('File size exceeds limit');
      return;
    }

    if (preview && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }

    setError(null);
    onFileSelect(file);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      if (file.size > maxSize) {
        setError('File size exceeds limit');
        return;
      }
      onFileSelect(file);
    }
  };

  const clearPreview = () => {
    setPreviewUrl(null);
    setError(null);
  };

  return (
    <div className="w-full">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed rounded-lg p-6 text-center"
      >
        <input
          type="file"
          accept={accept}
          onChange={handleFileSelect}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex flex-col items-center"
        >
          <Upload className="w-8 h-8 mb-2 text-gray-400" />
          <span className="text-sm text-gray-600">
            Drop files here or click to upload
          </span>
        </label>
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      {preview && previewUrl && (
        <div className="mt-4 relative inline-block">
          <img
            src={previewUrl}
            alt="Preview"
            className="max-w-xs rounded-lg"
          />
          <button
            onClick={clearPreview}
            className="absolute -top-2 -right-2 p-1 bg-white rounded-full shadow-md"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}