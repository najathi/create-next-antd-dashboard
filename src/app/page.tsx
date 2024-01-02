import {
  Button,
  Space,
  Divider,
} from 'antd';

const Home = function Home() {
  return (
    <>
      <section className='bg-white' style={{ textAlign: 'center', marginTop: 48, marginBottom: 40, padding: 100 }}>
        <div className='my-5 p-3 bg-white'>
          <h1 className='text-5xl font-bold text-black'>Next.js + Tailwind CSS</h1>
          <p className='text-2xl text-black'>with Ant Design</p>
          <div className="flex">
            <a
              className='text-2xl text-black pr-4'
              href='http://localhost:3000'
            >
              Home
            </a>
            <a
              className='text-2xl text-black'
              href='http://localhost:3000/with-sub-components'
            >
              With Sub Components
            </a>
          </div>
        </div>
        <Space align='start'>
          <img
            style={{ width: 40, height: 40 }}
            src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
            alt='Ant Design'
          />
          <h2 style={{ marginBottom: 0 }}>
            Ant Design (Without Sub Components)
          </h2>
        </Space>
        <Divider style={{ marginBottom: 60 }}>Divider</Divider>
        <Button type='primary' block href='/with-sub-components'>With Sub Components</Button>
      </section>
    </>
  );
}

export default Home;
