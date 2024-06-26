import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {Toolbar} from "../components/toolbar.jsx";
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container} id="arcadee">
      <Head>
        <title>Arcade</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Toolbar/>

      <div className={styles.intro}>
        <img src="/arcade.png" alt="" className={styles.arcade} />
      </div>
      <div id="overview">

      </div>
      <div className={styles.introtext}>
        <p><span>Imagine being in a Shopping Mall.</span> All the people around you continuously engaging in shopping and activities. Picture the feeling of walking into a shop you are regular in or the joy of finding a hidden gem. How good would it be if you could experience all that from the comfort of your homes? Well, we just made that possible!</p>
        {/* <Link href="/"><a>Read More ></a></Link> */}
      </div>

      <div className={styles.recom}>
        <img src="/recom.png" alt="" />
      </div>

      <div className={styles.spotlight}>
        <img src="/spotlight.png" alt="" className={styles.spotim} />
        <p>Through recommendations, suggestions launches, maps and various posts, Arcade serves as a huge marketing  platform for companies and their products. Users get exposed to both products they need and are also led to discover new stuff. We aim to provide a one-stop solution for both marketing and sales, and this a huge step in that way. </p>
        {/* <Link href="/"><a>About Arcade Spotlight ></a></Link> */}
      </div>

      <div className={styles.analytics}>
        <img src="/analytics.png" alt="" className={styles.anal} />
        <div className={styles.analsub}>
          <div className={styles.analtext}>
            <p>Analytics are provided for Companies, Outlets and Products. These may be used to dictate company or product rankings. <br/> <br/>
              Companies can leverage their analytics and compare to the general market to come up with strategies, while users can judge products and outlets based on these parameters.</p>
            {/* <Link href="/"><a>Read More ></a></Link> */}
          </div>
          <img src="/analphone.png" alt="" border="0" />
        </div>
      </div>

      <div className={styles.community}>
        <img src="/community.png" alt="" className={styles.comm} />
        <div className={styles.commsub}>
          <p>To replicate the E-mall experience, Arcade has features like live threads, Post Feed page and other methods of community interaction. You can ask for suggestions, react on events and posts or directly talk with a fellow user to express your opinions or maybe to talk about your favourite shoe brand.  </p>
          {/* <Link href="/"><a>Learn More ></a></Link> */}
        </div>
      </div>

      <div className={styles.delivery}>
        <img src="/delivery.png" alt="" className={styles.del} />
        <div className={styles.delsub}>
          <p>Arcade features fast and doorstep delivery directly from outlets. What you see is what you get. We have cut down on warehouse and larger shipping times to get you your items faster. We can deliver you items on the same day and even within a few hours.</p>
          {/* <Link href="/"><a>Learn More about Arcade Delivery></a></Link> */}
        </div>
      </div>

      <div className={styles.hold}>
        <img src="/hold.png" alt="" className={styles.hol} />
        <div className={styles.holsub}>
          <p>Don't want to pay extra for delivery? Are you in the area to just pick up your item? You can do just that with our new Hold feature. Just apply to hold you item and use our safe authentication system to securely collect your product right from our outlet.</p>
          {/* <Link href="/"><a>Learn More Arcade Hold Service></a></Link> */}
        </div>
      </div>

      <div className={styles.seasons}>
        <img src="/seasons.png" alt="" className={styles.sea} />
        <p>A highly personalized recommendation system based on a ensemble of state of the art technologies and conventional methods to show you exactly what you need. A combination of factors like viewed items, bookmarked items and bought items and much more play their roles to recommend products that both align with your tastes and  help you to discover new stuff.</p>
        {/* <Link href="/"><a>About Arcade Seasons ></a></Link> */}
      </div>

      <div className={styles.teams} id="teamsf">
        <div className={styles.teamtext}>
          <h1>
            Arcade <br/>Team
          </h1>
          <br />
          <p>Even though we are a two man team at this point, we aspire to work with a lot of talented individuals in the future. If are interested in working with us connect with us using the contact details provided below.</p>
        </div>
        <img src="/pics.png" alt="" />
      </div>

      <div className={styles.desc} id="foot">
        <img src="/arcade.png" alt="" />
        <p>Imagine being in a Shopping Mall. All the people around you continuously engaging in shopping and activities. Picture the feeling of walking into a shop you are regular in or the joy of finding a hidden gem. How good would it be if you could experience all that from the comfort of your homes? Well, we just made that possible!</p>
        <p className={styles.mobile}>Even though we are a two man team at this point, we aspire to work with a lot of talented individuals in the future. If are interested in working with us connect with us using the contact details provided below.</p>
        <a href="mailto:mailarcade.dev@gmail.com">mailarcade.dev@gmail.com</a>
      </div>

      {/* <div className={styles.footer}>
        <div className={styles.footsub}>

        <div>
          <p>Recommendations</p>
          <Link href="/"><a>How our Recommendation system works></a></Link>
        </div>
        <div>
          <p>Analytics</p>
          <Link href="/"><a>Learn the metrics that help companies to grow></a></Link>
        </div>
        <div>
          <p>Marketing</p>
          <Link href="/"><a>About Arcade Seasons ></a></Link>
        </div>
        <div>
          <p>Community</p>
          <Link href="/"><a>About Arcade Seasons ></a></Link>
        </div>
        <div>
          <p>Delivery</p>
          <Link href="/"><a>About Arcade Seasons ></a></Link>
        </div>
        <div>
          <p>Hold</p>
          <Link href="/"><a>About Arcade Seasons ></a></Link>
        </div>
        <div>
          <p>Seasons</p>
          <Link href="/"><a>About Arcade Seasons ></a></Link>
        </div>
        <div>
          <p>Team</p>
          <Link href="/"><a>About Arcade Seasons ></a></Link>
        </div>
        </div>
      </div> */}

    </div>
  )
}
