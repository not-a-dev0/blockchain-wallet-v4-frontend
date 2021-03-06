import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FormattedMessage } from 'react-intl'

import { actions } from 'data'
import { Link } from 'blockchain-info-components'

const MaximumAmountLink = props => (
  <Link
    size='12px'
    weight={300}
    onClick={props.actions.sendBsvFirstStepMaximumAmountClicked}
  >
    <FormattedMessage
      id='modals.sendbsv.maximumamountlink.maximum'
      defaultMessage='maximum'
    />
  </Link>
)

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions.components.sendBsv, dispatch)
})

export default connect(
  undefined,
  mapDispatchToProps
)(MaximumAmountLink)
