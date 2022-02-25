import Link from 'next/link'
import SocialUrls from './SocialUrls'
import ThemeSwitch from '../ThemeSwitch'
import s from './Footer.module.css'
import ExternalLink from '@components/ui/Link/ExternalLink'

const Footer = ({ categories, pages }: TNavigation) => {
  return (
    <footer className="block bottom-0 left-0 right-0 bg-primary-05 px-6 py-6 md:px-32 lg:px-48 xl:px-1/5">
      <nav
        className="flex flex-col  mt-6 mb-6 flex-wrap md:flex-row md:justify-between"
        aria-label="Footer Nav"
      >
        <div>
          <h3 className={s.heading}>Kategori</h3>
          <ul className={s.ul}>
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/${category.slug}`}>
                  <a className={s.link}>{category.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={s.heading}>Ekosistem</h3>
          <ul className={s.ul}>
            <li>
              <Link href="https://web30.my.id/">
                <a className={s.link}>Web3ID</a>
              </Link>
            </li>
            <li>
              <Link href="https://blog.web30.my.id/">
                <a className={s.link}>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="https://dao.web30.my.id/">
                <a className={s.link}>DAO</a>
              </Link>
            </li>
            <li>
              <Link href="https://nft.web30.my.id/">
                <a className={s.link}>NFT</a>
              </Link>
            </li>
            <li>
              <Link href="https://academy.web30.my.id/">
                <a className={s.link}>Academy</a>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={s.heading}>Halaman Lainnya</h3>
          <ul className={s.ul}>
            {pages.map((page) => (
              <li key={page.slug}>
                <Link href={`/pages/${page.slug}`}>
                  <a className={s.link}>{page.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <SocialUrls />

      <ThemeSwitch />

      <ExternalLink
        to="https://web30.my.id"
        ariaLabel="Web3ID"
        className="mx-auto flex items-center w-max pt-4 py-2 opacity-80 hover:opacity-100 text-sm"
      >
        Copyright © 2022 Web3ID |  
        Made With{' '}
        <span role="img" aria-label="love">
          💙
        </span>{' '}
        By Web3ID
      </ExternalLink>
    </footer>
  )
}

export default Footer