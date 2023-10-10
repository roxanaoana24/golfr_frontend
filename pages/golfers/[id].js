import { useRouter } from 'next/router'
import useGolfersScores from '../../lib/useGolfersScores'
import Layout from '../../components/Layout'
import ScoreCard from '../../components/ScoreCard'

const GolfersScores = () => {
  const router = useRouter()
  const { id } = router.query
  const { scores, error } = useGolfersScores(id)

  if (!id) {
    return null
  }

  return (
    <Layout>
      <>
        {error ? (
          error
        ) : (
          <>
            {scores && scores.map(score => (
              <ScoreCard
                key={score.id}
                id={score.id}
                totalScore={score.total_score}
                playedAt={score.played_at}
                userId={score.user_id}
                userName={score.user_name}
              />
            ))}
          </>
        )}
      </>
    </Layout>
  )
}
export default GolfersScores
