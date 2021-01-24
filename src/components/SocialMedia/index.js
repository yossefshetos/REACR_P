import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {SocialMediaSec, Social, Icon, SocialDesc, Span, SpanInfo} from './style.js'

const SocialMedia = () => {

  const [social, setSocial] = useState([]);

  useEffect(() => {

    axios.get("js/data.json").then(res => setSocial(res.data.social))

  }, [])


  const SocialItems = social.map(socialItem => {

    return(

      <Social key={socialItem.id} item={socialItem.id}>
          <Icon className={socialItem.icon}></Icon>
          <SocialDesc>
              <Span>{socialItem.title}</Span>
              <SpanInfo>{socialItem.body}</SpanInfo>
          </SocialDesc>
      </Social>

    )

  })


  return(

    <SocialMediaSec>  

      {SocialItems}

    </SocialMediaSec>

  )
}

export default SocialMedia;