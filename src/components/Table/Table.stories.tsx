import type { Meta } from '@storybook/react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './Table';

/**
 * A responsive table component with semantic HTML.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2814-1241
 */
const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2814-1241&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;

/**
 * Default table
 */
export const Default = {
  render: () => (
    <Table>
      <TableCaption>A list of recent patients</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Patient Name</TableHead>
          <TableHead>Patient ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Jerome Ball</TableCell>
          <TableCell>23158</TableCell>
          <TableCell>✓ 100% complete</TableCell>
          <TableCell className="text-right">→</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Cameron Williamson</TableCell>
          <TableCell>84820</TableCell>
          <TableCell>✓ 100% complete</TableCell>
          <TableCell className="text-right">→</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Darlene Simmons</TableCell>
          <TableCell>84820</TableCell>
          <TableCell>✓ 100% complete</TableCell>
          <TableCell className="text-right">→</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Savannah Nguyen</TableCell>
          <TableCell>84820</TableCell>
          <TableCell>⚠ 100% complete</TableCell>
          <TableCell className="text-right">→</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Ralph Edwards</TableCell>
          <TableCell>84820</TableCell>
          <TableCell>✓ 66% complete</TableCell>
          <TableCell className="text-right">→</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

/**
 * Table with footer
 */
export const WithFooter = {
  render: () => {
    const invoices = [
      { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
      { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
      { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
      { invoice: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
      { invoice: 'INV005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
      { invoice: 'INV006', status: 'Pending', method: 'Bank Transfer', amount: '$200.00' },
      { invoice: 'INV007', status: 'Unpaid', method: 'Credit Card', amount: '$300.00' },
    ];

    return (
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  },
};

/**
 * Striped rows
 */
export const Striped = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
          { name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
          { name: 'Carol White', email: 'carol@example.com', role: 'Editor' },
          { name: 'David Brown', email: 'david@example.com', role: 'User' },
          { name: 'Eve Davis', email: 'eve@example.com', role: 'Admin' },
        ].map((user, index) => (
          <TableRow key={user.email} className={index % 2 === 0 ? 'bg-muted/50' : ''}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

/**
 * Selected rows
 */
export const SelectedRows = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Task</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Priority</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow data-state="selected">
          <TableCell className="font-medium">Update documentation</TableCell>
          <TableCell>In Progress</TableCell>
          <TableCell>High</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Fix login bug</TableCell>
          <TableCell>Todo</TableCell>
          <TableCell>Critical</TableCell>
        </TableRow>
        <TableRow data-state="selected">
          <TableCell className="font-medium">Refactor API</TableCell>
          <TableCell>In Progress</TableCell>
          <TableCell>Medium</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Write tests</TableCell>
          <TableCell>Todo</TableCell>
          <TableCell>Low</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

/**
 * Responsive table
 */
export const Responsive = {
  render: () => (
    <div className="w-full max-w-4xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Rating</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            { product: 'Laptop Pro', category: 'Electronics', price: '$1,299', stock: 'In Stock', rating: '4.5' },
            { product: 'Wireless Mouse', category: 'Accessories', price: '$29', stock: 'Low Stock', rating: '4.2' },
            { product: 'USB-C Cable', category: 'Accessories', price: '$19', stock: 'In Stock', rating: '4.8' },
            { product: 'Monitor 27"', category: 'Electronics', price: '$399', stock: 'Out of Stock', rating: '4.6' },
            { product: 'Keyboard', category: 'Accessories', price: '$79', stock: 'In Stock', rating: '4.4' },
          ].map((item) => (
            <TableRow key={item.product}>
              <TableCell className="font-medium">{item.product}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.stock}</TableCell>
              <TableCell>{item.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};
