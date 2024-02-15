import React from 'react'
import GridContainer from '../gridData/GridContainer'
import GridChild from '../gridData/GridChild'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <section className='m-auto sectionContainer footerSectionContainer min1280px:grid !grid-cols-3 max1279px:grid-cols-1 m-auto w-full max-parent-grid-container-width max554px:pt-20 min555px:pt-40 pb-8 footer-section-components'>
        <GridContainer gridCols="grid-cols-1 mx-auto max-w-72 !items-start pb-12 max990px:gap-y-24">
            <GridChild 
              childId={20}
              childName="!gap-y-2"
              assetOrder={1}
            />
            <GridChild 
              childId={21}
              childName="!gap-y-2"
              customHeaderCss="font-bold"
              h4Order={1}
              paragraphOrder={2}
            />
            <GridChild 
              childId={22}
              childName="!gap-y-2"
              customHeaderCss="font-bold"
              h4Order={1}
              paragraphOrder={2}
            />
        </GridContainer>
        <GridContainer gridCols="grid-cols-1 mx-auto !items-start content-start max-w-72 py-12 flex-wrap">
            <GridChild 
              childId={23}
              childName="!gap-y-2"
            />
            <GridChild 
              childId={24}
              childName="!gap-y-2"
              customHeaderCss="font-bold"
            />
            <GridChild 
              childId={25}
              childName="!gap-y-2"
              customHeaderCss="font-bold"
            />
        </GridContainer>
        <GridContainer gridCols="grid-cols-1 mx-auto socialIcons !items-start max-w-72 !flex py-12 flex-wrap">
            <GridChild 
              childId={26}
              childName="!flex-row gap-x-4 !gap-y-2"
            />
        </GridContainer>
    </section>
    </>
  )
}

export default Footer
