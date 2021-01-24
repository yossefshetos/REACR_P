import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {ProfileSkills, ProfileSecrion, ProfileTitle, ProfileTitleSpan, ProfileList, ProfileItem, ProfileItemSpan, Skills, SkillsTitle, SkillsTitleSpan, SkillsDesc, Bar, BarTitle, BarPerc, BarParent, BarParentSpan} from './style.js'

const Profile = () => {


  const [skills , setSkills] = useState([]);


  useEffect(() => {

    axios.get("js/data.json").then(res => setSkills(res.data.skills));

  }, [])

  const SkillsItem = skills.map(skill => {

    return (
      <Bar key={skill.id}>
        <BarTitle>{skill.title}</BarTitle>
        <BarPerc>{skill.ratio}</BarPerc>
        <BarParent>
            <BarParentSpan className={`sp${skill.id}`}></BarParentSpan>
        </BarParent>
      </Bar>
    )

  })

  return(
    <ProfileSkills>
            <div className="container">
                <ProfileSecrion>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <ProfileItemSpan>Name</ProfileItemSpan>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Birthday</ProfileItemSpan>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Address</ProfileItemSpan>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Phone</ProfileItemSpan>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Email</ProfileItemSpan>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <ProfileItemSpan>Website</ProfileItemSpan>
                            <ProfileItemSpan web>www.google.com</ProfileItemSpan>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSecrion>
                
                <Skills>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>


                    {SkillsItem}
                    
                </Skills>
                
            </div>
        </ProfileSkills>
  )
}

export default Profile;