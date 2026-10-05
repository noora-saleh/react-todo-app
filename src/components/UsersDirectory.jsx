import {useState, useEffect} from 'react';
import './UsersDirectory.css';
function UsersDirectory() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://dummyjson.com/users?limit=10');

                const data = await response.json();
                setUsers(data.users || []);
            } catch (error) {
                console.error('Error fetching users:', error);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);


    const filteredUsers = users.filter((user) =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

    if (loading) {
        return <div>جاري تحميل البيانات...</div>;
    }

return (
    <div className="directory-container">
        <h2>دليل المستخدمين</h2>
        <input
        type="text"
        placeholder="ابحث عن اسم المستخدم"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="cards-grid">
            {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
             <div key={user.id} className="user-card">
             <h3>{user.firstName} {user.lastName}</h3>
              <p><strong>:البريد</strong> {user.email}</p>
              <p>{user.address.city}<strong>:المدينة</strong> </p>
            </div>))
            ):(
                <p>لم يتم العثور على مستخدمين.</p>
            )}
          </div>
    </div>
);
}
export default UsersDirectory;