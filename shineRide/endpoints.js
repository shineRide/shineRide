//t7ot il-URL de base mta3 l'API bach tbadel il-Wi-Fi  tbadel  seulement bch.
const baseUrl = "http://192.168.0.181:3000"
export const clientEndpoints = {
  //fi getClients tnajem trecuperi kol il-clients
  getClients: `${baseUrl}/client/getAll`,

  // fi getClient tnajem trecuperi client spécifique b email
  getClient: (email) => `${baseUrl}/client/getOne/${email}`,

  // fi createClient tnajem tajouti client jdida
  createClient: `${baseUrl}/client/addClient`,

  // fi updateClient tnajem tbadel client bch ykoun mawjoud bch yhawel 3lih mise à jour
  updateClient: (id) => `${baseUrl}/client/updateClients/${id}`,

  //fi deleteClient tnajem tsupprimi client mawjoud bch ykoun fih ID mte3ou.
  deleteClient: (id) => `${baseUrl}/client/deleteClient/${id}`,
};

// Commentaire en tunisien :
// 
// Les endpoints houma lil7a9 clients,  fi getClient tnajem trecuperi client spécifique b email,
// , ,
// 
