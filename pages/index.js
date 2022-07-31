import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <img src="/arcade.png" alt="" className={styles.arcade} />
      </div>

      <div className={styles.introtext}>
        <p><span>Imagine being in a Shopping Mall.</span> All the people around you continuously engaging in shopping and activities. Picture the feeling of walking into a shop you are regular in or the joy of finding a hidden gem. How good would it be if you could experience all that from the comfort of your homes? Well, we just made that possible!</p>
        <Link href="/"><a>Read More ></a></Link>
      </div>

      <div className={styles.recom}>
        <img src="/recom.png" alt="" />
      </div>

      <div className={styles.spotlight}>
        <img src="/spotlight.png" alt="" className={styles.spotim} />
        <p>Through recommendations, suggestions launches , maps and various posts, Arcade serves as a huge marketing  platform for companies and their products. Users get exposed to both products they need and are also led to discover new stuff. We aim to provide a one-stop solution for both marketing and sales, and this a huge step in that way. </p>
        <Link href="/"><a>About Arcade Hold Service ></a></Link>
      </div>

      <div className={styles.analytics}>
        <img src="/analytics.png" alt="" className={styles.anal} />
        <div className={styles.analsub}>
          <div className={styles.analtext}>
            <p>Analytics are provided for Companies, Outlets and Products. These may be used to dictate company or product rankings.
              Companies can leverage their analytics and compare to the general market to come up with strategies, while users can judge products and outlets based on these parameters.</p>
            <Link href="/"><a>Read More ></a></Link>
          </div>
          <img src="/analphone.png" alt="" border="0" />
        </div>
      </div>

      <div className={styles.community}>
        <img src="/community.png" alt="" className={styles.comm} />
        <div className={styles.commsub}>
          <p>To replicate the E-mall experience, Arcade has features like live threads, Post Feed page and other methods of community interaction. You can ask for suggestions, react on events and posts or directly talk with a fellow user to express your opinions or maybe to talk about your favourite shoe brand.  </p>
          <Link href="/"><a>Learn More ></a></Link>
        </div>
      </div>

      <div className={styles.delivery}>
        <img src="/delivery.png" alt="" className={styles.del} />
        <div className={styles.delsub}>
          <p>Arcade features fast and doorstep delivery directly from outlets. What you see is what you get. We have cut down on warehouse and larger shipping times to get you your items faster. We can deliver you items on the same day and even within a few hours.</p>
          <Link href="/"><a>Learn More ></a></Link>
        </div>
      </div>

      <div className={styles.hold}>
        <img src="/hold.png" alt="" className={styles.hol} />
        <div className={styles.holsub}>
          <p>Don't want to pay extra for delivery? Are you in the area to just pick up your item? You can do just that with our new Hold feature. Just apply to hold you item and use our safe authentication system to securely collect your product right from our outlet.</p>
          <Link href="/"><a>Learn More ></a></Link>
        </div>
      </div>

      <div className={styles.seasons}>
        <img src="/seasons.png" alt="" className={styles.sea} />
        <p>A highly personalized recommendation system based on a ensemble of state of the art technologies and conventional methods to show you exactly what you need. A combination of factors like viewed items, bookmarked items and bought items and much more play their roles to recommend products that both align with your tastes and  help ypu to discover new stuff.</p>
        <Link href="/"><a>About Arcade Seasons ></a></Link>
      </div>

      <div className={styles.teams}>
        <div className={styles.teamtext}>
          <h1>
            Arcade Team
          </h1>
          <br />
          <p>While Arpan is involved with the design and marketing aspect of the company, Saptarshi is into the Technical aspect of the project.</p>
        </div>
        <img src="/pics.png" alt="" />
      </div>

      <div className={styles.desc}>
        <img src="/arcade.png" alt="" />
        <p>Imagine being in a Shopping Mall. All the people around you continuously engaging in shopping and activities. Picture the feeling of walking into a shop you are regular in or the joy of finding a hidden gem. How good would it be if you could experience all that from the comfort of your homes? Well, we just made that possible!</p>
        <Link href="/"><a>About Arcade Seasons ></a></Link>
      </div>

      <div className={styles.footer}>
        <div className={styles.footsub}>

        <div>
          <p>Recommendations</p>
          <Link href="/"><a>About Arcade Seasons ></a></Link>
        </div>
        <div>
          <p>Analytics</p>
          <Link href="/"><a>About Arcade Seasons ></a></Link>
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
      </div>

    </div>
  )
}
