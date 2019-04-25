import React, { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";
import axios from "axios";
import styled from "styled-components";



function StarRating(props) {
  const [userRanking, setUserRanking] = useState({
    ranking: 0,
    ranking_id: 0,
    id: props.id
  })
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    let fetchData = async () => {
      CheckRanking()
    }
    fetchData()
  }, [])

  async function CheckRanking() {
    try {
      let dbRanking = await axios.get(`/api/user-ranking/${props.id}`)
      dbRanking = dbRanking.data[0]
      if (!dbRanking) {
        return setUserRanking({
          ...userRanking,
          id: props.id
        })
      }
      const { ranking, id } = dbRanking
      setIsLoading(false)
      setUserRanking({
        ...userRanking,
        ranking: ranking,
        ranking_id: id
      })
    } catch (err) {
      
      console.log(`there was a problem getting the user rating:${err}`)
    }
  }

  async function handleRatingChange(newRanking) {
    setUserRanking({
      ...userRanking,
      ranking:newRanking
    })
    try {
      if (userRanking.ranking_id === 0) {
        const dbRanking = await axios.post("/api/new-ranking", {
          newRanking,
          id: props.id
        })
        const { id, user_id, ranking } = dbRanking.data[0]
        setUserRanking({
          ranking,
          ranking_id: id,
          id: user_id
        })
      } else {
        let dbRanking = await axios.put("/api/update-ranking", {
          ranking: newRanking,
          ranking_id: userRanking.ranking_id
        })
        const { id, user_id, ranking } = dbRanking.data[0]
        setUserRanking({
          ranking,
          ranking_id: id,
          id: user_id
        })
      }
    } catch (err) {
      console.log(`There was a problem updating the user ranking: ${err}`)
    }
  }

  return (
    <div>
      {isLoading ? (
        <div>Loading ...</div>
      ):
      <StarRatings
        rating={userRanking.ranking}
        starRatedColor="red"
        changeRating={handleRatingChange}
        numberOfStars={5}
        name="rating"
      />
    }
    </div>
  )
}
export default StarRating
