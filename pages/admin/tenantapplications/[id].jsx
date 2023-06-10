import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../../../styles/singleDetail.module.css'
import { Bars3Icon, DocumentChartBarIcon, PencilSquareIcon, UserGroupIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
const ApplicationDetails = ({ application }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const router = useRouter();
    const { id } = router.query;
    console.log(application)
    const licenseDate = new Date(application.licenseInfo.licenseDate).toLocaleDateString();
    const handleLogout = () => {
        localStorage.removeItem('user');
        router.push('/login');
        localStorage.removeItem('rememberedEmail');
        localStorage.removeItem('rememberedPassword');
        localStorage.removeItem('rememberMe');
    };
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    if (!application) {
        return (
            <div className={styles.singleApplicationContainer}>
                <div className={styles.mobileNavbar}>
                    <h3>Admin Panel</h3>
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
                            <Link href="/admin/tenantapplications">Talent Applications</Link>
                        </li>
                    </ul>
                    <div className={styles.buttonCotainer}>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
                <div className={styles.container}>
                    <h1 className={styles.mytitle}>Tenant Initial Application</h1>
                    <p>Loading...</p>
                </div>

            </div>
        );
    }

    return (
        <div className={styles.singleApplicationContainer}>
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
                            <Image src="/admin.jpg" alt="adminpage" fill />
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
                <h1 className={styles.mytitle}>Tenant Application Detail</h1>
                <div className={styles.applicationDetails}>
                    <p>
                        <span className={styles.detailLabel}>Name:</span> {application.name}
                    </p>
                    <p>
                        <span className={styles.detailLabel}>Address:</span> {application.address}
                    </p>
                    <p>
                        <span className={styles.detailLabel}>Email:</span> {application.email}
                    </p>
                    <p>
                        <span className={styles.detailLabel}>Telephone:</span> {application.telephone}
                    </p>
                    <p>
                        <span className={styles.detailLabel}>Receiving Text Messages:</span> {application.receiveTextMessages === true ? "Yes" : "No"}
                    </p>
                    <p>
                        <span className={styles.detailLabel}>Industory Exerience:</span> {application.industryExperience} Years
                    </p>
                    <p>
                        <span className={styles.detailLabel}>License Date:</span> {licenseDate}
                    </p>
                    <p>
                        <span className={styles.detailLabel}>License Number:</span> {application.licenseInfo.licenseNumber}
                    </p>
                    <p>
                        <span className={styles.detailLabel}>License Validity:</span> {application.licenseInfo.isLicenseValid === true ? "Yes" : "No"}
                    </p>
                    <p>
                        <span className={styles.detailLabel}>Leasing Time:</span> {application.leaseTiming}
                    </p>
                    <p>
                        <span className={styles.detailLabel}>Hear About Us:</span> {application.hearAboutUs}
                    </p>
                    <p>
                        <span className={styles.detailLabel}>Sevices:</span> {application.services}
                    </p>
                </div>
            </div>
        </div>

    );
};

export async function getServerSideProps({ query, req }) {
    try {
        const host = req.headers.host;
        const response = await axios.get(`http://${host}/api/tenantapplication/${query.id}`);
        const application = response.data.data;
        return { props: { application } };
    } catch (error) {
        console.error(error);
        return { props: { application: null } };
    }
}

export default ApplicationDetails;
