import React, { useState, useEffect } from 'react';
import styles from '../../styles/admin.module.css';
import Image from 'next/image';
import Link from 'next/link';
import withAuth from '@/components/ProtectedRoute';
import { useRouter } from 'next/router';
import { Bars3Icon, DocumentChartBarIcon, UserGroupIcon, XMarkIcon } from '@heroicons/react/24/outline';
import axios from 'axios';

const Admin = () => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userCount, setUserCount] = useState(0); // State to store the user count
  const [applicationCount, setApplicationCount] = useState(0); // State to store the application count

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
    localStorage.removeItem('rememberedEmail');
    localStorage.removeItem('rememberedPassword');
    localStorage.removeItem('rememberMe');
  };

  useEffect(() => {
    // Fetch the user count when the component mounts
    axios
      .get('/api/userstat')
      .then((response) => {
        setUserCount(response.data.userCount);
      })
      .catch((error) => {
        console.error('Error fetching user count:', error);
      });
    axios
      .get('/api/applicationstat') // Make a GET request to the new API endpoint
      .then((response) => {
        setApplicationCount(response.data.applicationCount);
      })
      .catch((error) => {
        console.error('Error fetching application count:', error);
      });
  }, []);

  return (
    <div className={styles.adminContainer}>
      <div className={styles.mobileNavbar}>
        <Link href="/admin"><h3>Admin Panel</h3></Link>
        <div className={styles.menuIcon} onClick={toggleSidebar}>
          {sidebarOpen ? <XMarkIcon className={styles.barIconss} /> : <Bars3Icon className={styles.barIconss} />}
        </div>
      </div>

      <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.uppercontainer}>
          <Link href="/admin">
            <div className={styles.zendoraAdmin}>
              <Image src="https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686388640/zendora/admin_sfdett.jpg" alt="adminpage" fill />
            </div>
          </Link>
          <p className={styles.paragraph}>info@zendorasalon.com</p>
        </div>
        <ul className={styles.sidebarList}>
          <li className={`${styles.sidebarItem} ${router.pathname === '/admin/registeredusers' ? styles.activeRoute : ''}`}>
            <UserGroupIcon className={styles.userIcon} />
            <Link href="/admin/registeredusers">Registered Users</Link>
          </li>
          <li className={`${styles.sidebarItem} ${router.pathname === '/admin/tenantapplications' ? styles.activeRoute : ''}`}>
            <DocumentChartBarIcon className={styles.userIcon} />
            <Link href="/admin/tenantapplications">Tenant Applications</Link>
          </li>
        </ul>
        <div className={styles.buttonCotainer}>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.pageTitle}>Zendor Admin Pannel</h1>
        <div className={styles.pageContent}>
          <div className={styles.statContainer}>
            <div className={styles.statone}>
              <p>Registed Users</p>
              <b className={styles.count}>{userCount <= 9 ? '0' + userCount : userCount}</b>
            </div>
            <div className={styles.stattwo}>
              <p>Tenant Applications</p>
              <b className={styles.count}>{applicationCount <= 9 ? "0" + applicationCount : applicationCount}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Admin);
