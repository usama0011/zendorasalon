import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../../styles/registerdusers.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import withAuth from '@/components/ProtectedRoute';
import Skeleton from '@/components/Skeleton';
import { useRouter } from 'next/router';
import { DocumentChartBarIcon, PencilSquareIcon, UserGroupIcon } from '@heroicons/react/24/outline';
const Index = () => {
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchUsername, setSearchUsername] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  let adminId = '647c233c5c96e3391536c865';
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
    const getUsers = async () => {
      try {
        const response = await axios.get('/api/user');
        setUsers(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, []);
  console.log(users)
  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`/api/user/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const filteredUsers = users.filter((user) => {
    const nameMatch = user.fullname.toLowerCase().includes(searchName.toLowerCase());
    const usernameMatch = user.username.toLowerCase().includes(searchUsername.toLowerCase());
    const emailMatch = user.email.toLowerCase().includes(searchEmail.toLowerCase());

    return nameMatch && usernameMatch && emailMatch;
  });

  return (
    <div className={styles.registerUserContainer}>
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
      <div className={styles.container}>
        <h1 className={styles.title}>Registered Users</h1>
        <div className={styles.searchContainer}></div>
        {loading ? (
          <Skeleton /> // Render loading skeleton component if loading is true
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>
                  <MagnifyingGlassIcon className={styles.myIcon} />
                  <input
                    type="text"
                    placeholder="Search by Name"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                  />
                </th>
                <th>
                  <MagnifyingGlassIcon className={styles.myIcon} />
                  <input
                    type="text"
                    placeholder="Search by Username"
                    value={searchUsername}
                    onChange={(e) => setSearchUsername(e.target.value)}
                  />
                </th>
                <th>
                  <MagnifyingGlassIcon className={styles.myIcon} />
                  <input
                    type="text"
                    placeholder="Search by Email"
                    value={searchEmail}
                    onChange={(e) => setSearchEmail(e.target.value)}
                  />
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user.fullname}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      disabled={user?.isAdmin === true ? true : false}
                      className={styles.button}
                      onClick={() => handleDeleteUser(user._id)}
                    >
                      Delete User
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default withAuth(Index);
