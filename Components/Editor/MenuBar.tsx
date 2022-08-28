import Button from './Button';
import { getEditorTopBarItems } from './utils';

const MenuBar = ({ editor }: any) => {
  if (!editor) {
    return null;
  }

  return (
    <div>
      <ul className='flex flex-wrap'>
        {getEditorTopBarItems(editor).map((button: any) => (
          <li key={button.label}>
            <Button
              onClick={button.onClick}
              isActive={button.isActive}
              className={button.className}
            >
              {button.icon && button.icon()}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBar;
