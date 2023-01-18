import Navbar from '@/components/Navbar';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@mui/material';

export default function Index() {
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>Welcome to my music app!</h1>
          <h3>Here you can find and listen best tracks...</h3>
          <Button>Button</Button>
        </div>
      </MainLayout>

      <style>
        {`
          .center {
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
}
