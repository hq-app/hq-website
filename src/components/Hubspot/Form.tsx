import * as React from 'react'
import injectSheet from 'react-jss'

import HubspotForm from 'react-hubspot-form'
import { ReactNode } from "react";
import FormDialog from "../Dialog/Dialog";

const styles = {
  form: {}
}

interface HubspotFormProps {
  classes?: any,
  portalId: string,
  formId: string,
  handleClose: () => void
  loading?: ReactNode
}

class HubspotFormDialog extends React.Component<HubspotFormProps, {}> {
  render() {
    const { portalId, formId, handleClose } = this.props;
    return (
      <FormDialog open={true} handleClose={handleClose}>
        <HubspotForm
          portalId={portalId}
          formId={formId}
          // onSubmit={() => console.log('Submit!')}
          // onReady={(form) => console.log('Form ready!')}
          loading={<div>Loading...</div>}
        />
      </FormDialog>
    )
  }
}

export default injectSheet(styles)(HubspotFormDialog);