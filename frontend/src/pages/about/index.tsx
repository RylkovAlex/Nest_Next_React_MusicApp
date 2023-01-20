import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const About = () => {
  return (
    <MainLayout>
      <h1>About</h1>
      <p>This app was created by <a style={{textDecoration: 'none', color: '#1976d2'}}href='https://github.com/rylkovalex'>RylkovAlex</a> based on a youtube tutorial from Timur Ulbi</p>

      <h2>Used tools</h2>
      <ul>
        <li>NestJS</li>
        <li>NextJS</li>
        <li>MongoDB</li>
        <li>Material UI</li>
        <li>ReactJS</li>
        <li>Redux</li>
        <li>TypeScript</li>
      </ul>
    </MainLayout>
  );
};

export default About;
