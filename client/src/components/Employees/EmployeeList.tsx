import { useEffect, useState } from 'react';

type Employee = {
  id: number;
  company_id: string;
  username: string;
  first_name: string;
  last_name: string;
  position: string;
  region: string;
  origin: string;
  profile_picture?: string;
};

export default function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users/list/', { credentials: 'include' })
      .then(res => res.json())
      .then(data => {
        console.log('employees:', data);
        setEmployees(data);
      });
  }, []);
  useEffect(() => {
    console.log('employees:', employees);
  }, [employees]);

  if (loading) {
    return <div>Betöltés...</div>;
  }

  return (
    <div>
      <h2>Munkatársak</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.first_name} {emp.last_name} ({emp.username}) – {emp.position} [{emp.region}]
          </li>
        ))}
      </ul>
    </div>
  );
}