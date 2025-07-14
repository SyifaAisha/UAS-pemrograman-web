export default function UserCard({ fullname, email, roles, status }: any) {
  const statusColor =
    status.toLowerCase() === 'aktif' ? 'text-green-600' : 'text-red-600';

  return (
    <div
      id="user-card"
      className="border rounded-lg p-4 flex justify-between items-center bg-white mb-3"
    >
      <div>
        <h2 className="text-[18px] font-bold mb-1">{fullname}</h2>
        <p className="text-base text-black mb-2">{email}</p>
        <span className="bg-black text-white px-3 py-1 rounded mr-2">
          {roles}
        </span>
      </div>
      <span className={`text-[16px] font-bold ${statusColor}`}>
        {status}
      </span>
    </div>
  );
}
