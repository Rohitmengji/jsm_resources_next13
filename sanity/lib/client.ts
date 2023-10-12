import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, token } from '../env'

export const readClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export const writeClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
})

// In summary, the provided code defines two Sanity client instances, readClient and writeClient, which are used to interact with a Sanity.io backend service. The configuration details (e.g., apiVersion, dataset, projectId, useCdn, and token) are imported from an external module ('../env'), and they determine how the clients connect to the Sanity service. The readClient is for reading data, while the writeClient is for both reading and writing data, with the added capability of authentication using a token.