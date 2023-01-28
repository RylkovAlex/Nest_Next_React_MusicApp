import MainLayout from '@/layouts/MainLayout';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>Welcome to my music app!!!</h1>
          <h3>Here you can add, find and listen to the best tracks...</h3>
          <Button variant={'outlined'} onClick={() => router.push('/tracks')}>
            Let's Go!
          </Button>
        </div>
      </MainLayout>

      {/* just rof exaple of adding css */}
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
