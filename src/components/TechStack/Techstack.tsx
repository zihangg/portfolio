import React from 'react';
import './Techstack.css';
import Typescript from '../../assets/ts';
import CSS from '../../assets/css';
import Box from '../Box/Box';
import Docker from '../../assets/docker';
import EC2 from '../../assets/ec2';
import ReactIcon from '../../assets/react';
import PGSQL from '../../assets/pgsql';
import Redux from '../../assets/redux';
import Figma from '../../assets/figma';
import PHP from '../../assets/php';
import GitLab from '../../assets/gitlab';
import MySQL from '../../assets/mysql';
import VSC from '../../assets/vsc';
import MongoDB from '../../assets/mongodb';
import Hardhat from '../../assets/hardhat';
import Solidity from '../../assets/solidity';

function Techstack() {
  return (
    <>
      <div className="main-container" id="stack">
        <div className="techstack-title">TECH STACK</div>
        <div className="techstack-container">
          <Box icon={<Typescript />} />
          <Box icon={<CSS />} />
          <Box icon={<Docker />} />
          <Box icon={<EC2 />} />
          <Box icon={<ReactIcon />} />
          <Box icon={<PGSQL />} />
          <Box icon={<Redux />} />
          <Box icon={<Figma />} />
          <Box icon={<PHP />} />
          <Box icon={<GitLab />} />
          <Box icon={<MySQL />} />
          <Box icon={<VSC />} />
          <Box icon={<MongoDB />} />
          <Box icon={<Solidity />} />
          <Box icon={<Hardhat />} />
        </div>
      </div>
    </>
  );
}

export default Techstack;
