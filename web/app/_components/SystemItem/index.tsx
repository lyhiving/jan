type Props = {
  name: string;
  value: string;
};

const SystemItem: React.FC<Props> = ({ name, value }) => (
  <div className="flex gap-2 pl-4 my-1">
    <div className="flex gap-2.5 w-max font-bold text-gray-900 text-sm">
      {name}
    </div>
    <span className="text-gray-900 text-sm">{value}</span>
  </div>
);

export default SystemItem;