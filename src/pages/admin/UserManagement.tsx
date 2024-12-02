import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { User, Edit, Trash2, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { User as UserType } from '../../types/auth';
import DataTable from '../../components/admin/DataTable';
import { getUsers } from '../../services/auth';
import AdminLayout from '../../components/admin/AdminLayout';
import toast from 'react-hot-toast';

export default function UserManagement() {
  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  const handleEditUser = (user: UserType) => {
    console.log('Edit user:', user);
    toast.success('User updated successfully');
  };

  const handleDeleteUser = (user: UserType) => {
    console.log('Delete user:', user);
    toast.success('User deleted successfully');
  };

  const columns = [
    {
      header: 'Name',
      accessorKey: 'name',
      cell: ({ row }: { row: { original: UserType } }) => (
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
            <User size={16} />
          </div>
          {row.original.name}
        </div>
      ),
    },
    {
      header: 'Email',
      accessorKey: 'email',
    },
    {
      header: 'Role',
      accessorKey: 'role',
      cell: ({ getValue }: { getValue: () => string }) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          getValue() === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
        }`}>
          {getValue()}
        </span>
      ),
    },
    {
      header: 'Status',
      accessorKey: 'status',
      cell: ({ getValue }: { getValue: () => string }) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          getValue() === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {getValue()}
        </span>
      ),
    },
    {
      header: 'Last Login',
      accessorKey: 'lastLogin',
      cell: ({ getValue }: { getValue: () => string }) => 
        format(new Date(getValue()), 'MMM d, yyyy HH:mm'),
    },
    {
      header: 'Actions',
      cell: ({ row }: { row: { original: UserType } }) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleEditUser(row.original)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={() => handleDeleteUser(row.original)}
            className="p-1 hover:bg-gray-100 rounded text-red-600"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  if (isLoading) {
    return <AdminLayout>Loading...</AdminLayout>;
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">User Management</h1>
          <button className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors">
            <UserPlus size={16} className="mr-2" />
            Add User
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6">
            <DataTable
              data={users || []}
              columns={columns}
              pageSize={10}
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}