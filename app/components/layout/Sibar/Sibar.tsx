
import styles from './Sibar.module.scss'
import Link from 'next/link'
import '@fortawesome/fontawesome-svg-core/styles.css'; 
import '../../../lib/fontawesome'; 
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Sibar: React.FC = () =>{
    return(
        <aside className={styles['wrapper']}>
            <nav className={styles['sibar-list']}>
                <Link className={styles['sibar-option-link']} href="/home">
                    <p className={styles['sibar-item']}>
                        Woman&apos;s Fashion 
                        <FontAwesomeIcon className={styles['sibar-icon']}  icon = {faChevronRight}/>
                    </p>
                </Link>
                <Link className={styles['sibar-option-link']} href="/home">
                    <p className={styles['sibar-item']}>
                        Men&apos;s Fashion 
                        <FontAwesomeIcon className={styles['sibar-icon']} icon = {faChevronRight}/>
                    </p>
                </Link>
                <Link className={styles['sibar-option-link']} href="/home">
                    <p className={styles['sibar-item']}>
                        Electronics
                    </p>
                </Link>
                <Link className={styles['sibar-option-link']} href="/home">
                    <p className={styles['sibar-item']}>
                        Home & LifeStyle
                    </p>
                </Link>
                <Link className={styles['sibar-option-link']} href="/home">
                    <p className={styles['sibar-item']}>
                        Medicine
                    </p>
                </Link>
                <Link className={styles['sibar-option-link']} href="/home">
                    <p className={styles['sibar-item']}>
                        Sports & Outdoor 
                    </p>
                </Link>
                <Link className={styles['sibar-option-link']} href="/home">
                    <p className={styles['sibar-item']}>
                        Baby&apos;s & Toys
                    </p>
                </Link>
                <Link className={styles['sibar-option-link']} href="/home">
                    <p className={styles['sibar-item']}>
                        Groceries & Pets
                    </p>
                </Link>
                <Link className={styles['sibar-option-link']} href="/home">
                    <p className={styles['sibar-item']}>
                        Health & Beauty 
                    </p>
                </Link>
                
                
                

                
            </nav>
        </aside>

    )
}

export default Sibar;