import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from "../../../styles/tenant.module.css"
import withAuth from '@/components/ProtectedRoute';
import Skeleton from '@/components/Skeleton';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Bars3Icon, DocumentChartBarIcon, PencilSquareIcon, UserGroupIcon, XMarkIcon } from '@heroicons/react/24/outline';
const Index = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const router = useRouter();
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
        const getApplications = async () => {
            try {
                const response = await axios.get('/api/tenantapplication');
                const sortedApplications = response.data.data.sort((a, b) => {
                    // Sort in descending order based on createdAt date
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
                setApplications(sortedApplications);
                setLoading(false); // Set loading state to false when data is fetched
            } catch (error) {
                console.error(error);
            }
        };

        getApplications();
    }, []);

    return (
        <div className={styles.tenantContainer}>
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
            <div>

            </div>
            <div className={styles.container}>
                <h1 className={styles.mytitle}>Tenant Initial Applications</h1>
                {loading ? ( // Render loading state if loading is true
                    <Skeleton />
                ) : (
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Posting Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((application) => (
                                <tr key={application._id}>
                                    <td>{application.name}</td>
                                    <td>{application.email}</td>
                                    <td>{application.createdAt && moment(application.createdAt).format('DD-MM-YYYY')}</td>
                                    <td>
                                        <Link className={styles.myLink} href={`/admin/tenantapplications/${application._id}`}>
                                            view application
                                        </Link>
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
