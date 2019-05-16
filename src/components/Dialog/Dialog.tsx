import * as React from 'react';
import { ReactNode } from "react";
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { MdClear } from 'react-icons/md'

const styles = {
  dialogWrapper: {
    zIndex: '2',
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    "&.-hidden": {
      display: 'none'
    }
  },
  dialog: {
    padding: '24px',
    position: 'fixed',
    maxHeight: 'calc(100% - 96px)',
    backgroundColor: '#ffffff',
    boxShadow: '0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)',
    width: '50%',
    "@media (max-width: 1024px)": {
      width: '60%'
    },
    "@media (max-width: 767px)": {
      maxHeight: 'initial',
      height: 'calc(100% - 48px)',
      width: 'calc(100% - 48px)'
    },
    "&.-center": {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    "&.-shrink": {
      width: 'auto',
      height: 'auto'
    },
    "&.-cover": {
      padding: '0',
      lineHeight: '0'
    },
    "& > div > div > iframe": {
      width: '100% !important'
    }
    // "@media (max-width: 550px)": {
    //   width: '400px'
    // },
    // "@media (max-width: 450px)": {
    //   width: '300px'
    // }
  },
  closeIcon: {
    position: 'absolute',
    right: '16px',
    top: '16px',
    fontSize: '2rem',
    color: '#bbb',
    cursor: 'pointer'
  }
}

interface FormDialogProps {
  classes?: any
  title?: string,
  text?: string,
  children: ReactNode,
  open: boolean,
  template?: ReactNode,
  cover?: boolean,
  center?: boolean,
  shrink?: boolean,
  handleClose: () => void
}

class FormDialog extends React.Component<FormDialogProps, {}> {
  state = {
    open: false
  };

  render() {
    const { classes: c, title, text, children, open, handleClose, template, shrink, center, cover } = this.props;
    return (
      <div onClick={handleClose} className={classNames(c.dialogWrapper, !open && '-hidden')}>
        <div className={classNames(c.dialog, cover && '-cover', shrink && '-shrink', center && '-center')}>
          {
            !! template
              ? template
              : <>
                  <h2>{title}</h2>
                  <p>{text}</p>
                  { children }
                  <MdClear onClick={handleClose} className={c.closeIcon}/>
                </>
          }
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(FormDialog)