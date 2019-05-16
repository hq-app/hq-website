import * as React from 'react'
import Switch from 'react-switch'
import injectSheet from 'react-jss'

import HQTheme from '../../theme/theme'

const styles = {
  toggle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px',
    flexDirection: 'column-reverse',
    "& > span": {
      marginTop: '8px',
      color: '#87869A',
      fontSize: '0.8rem',
    }
  }
}

interface toggleProps {
  id: string,
  label?: string,
  handleChange: () => void,
  isChecked: boolean,
}

class Toggle extends React.Component<toggleProps, {}> {
    render() {
      const { classes: c, id, label, handleChange, isChecked, onColor, onHandleColor } = this.props;
      return (
        <label className={c.toggle} htmlFor={id}>
          {!!label && <span>{label}</span>}
          <Switch
            id={id}
            onChange={handleChange}
            checked={isChecked}
            uncheckedIcon={false}
            checkedIcon={false}
            offColor={"#ccc"}
            onColor={onColor}
            offHandleColor={"#fff"}
            onHandleColor={onHandleColor}
            handleDiameter={20}
            height={24}
            width={48}
            boxShadow={'0 0 2px 0px #000'}
          />
        </label>
      )
    }
}

export default injectSheet(styles)(Toggle)
