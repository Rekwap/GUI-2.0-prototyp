import Menu from './imports/Menu';

export default function TestMenu() {
  return (
    <div>
      <Menu 
        onClose={() => console.log('close')}
        onInfoClick={() => console.log('info')}
      />
    </div>
  );
}
