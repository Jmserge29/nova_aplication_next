

const InformationsP = ({navigation}) => {
  return (
    <>
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          {item.name}
        </a>
      ))}
    </>
  );
};

export default InformationsP;
