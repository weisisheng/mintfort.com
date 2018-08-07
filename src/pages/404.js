import React from 'react'
import PropTypes from 'prop-types'

import Layout from 'components/layout'

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default NotFoundPage
