import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BreadcrumbComponent = () => {
  const router = useRouter();
  const { pathname } = router;

  // Split the pathname into individual segments
  const pathSegments = pathname.split('/').filter(segment => segment !== '');

  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">
        <HomeOutlined />
      </Breadcrumb.Item>
      {pathSegments.map((segment, index) => (
        <Breadcrumb.Item key={index}>
          <Link href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
            {segment}
          </Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
