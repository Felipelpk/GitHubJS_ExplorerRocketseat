import { destroyCookie } from "nookies";
import { useContext, useEffect } from "react"
import { withSSRAuth } from "../../utils/withSSRAuth";
import { Can } from "../components/Can";
import { AuthContext } from "../contexts/AuthContext"
import { useCan } from "../hooks/useCan";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext);

  const userCanSeeMetrics = useCan({
    permissions: ['metrics.list3']
  })

  useEffect(() => {
    api.get('/me').then(response => console.log(response))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1>Dashboard, Welcome {user?.email}</h1>

      <button onClick={signOut}>Sign Out</button>
      <Can permissions={['metrics.list']}>
        <div>Metricas</div>
      </Can>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx); 
  const response = await apiClient.get('/me');

  return {
    props: {

    }
  }
})