import { AccentElement } from '@/_components/AccentElement';
import { ReactElement } from 'react';
import { RollingFragment } from '../../_components/RollingFragment';
import { Section } from '../../_components/Section';
import styles from './styles.module.css';

interface Props {
	withAnswer?: boolean;
}

export function Question({ withAnswer }: Props): ReactElement {
	if (withAnswer) {
		return (
			<>
				<Section bgColor="darker">
					<AccentElement>
						<p
							className="question"
							style={{ lineHeight: 1.5, padding: '0 4rem' }}
						>
							Чи може{' '}
							<span style={{ borderBottom: '1px solid' }}>
								технологія
							</span>{' '}
							призвести до ситуації, коли розробка проєкту стає
							настільки складною та нестерпною, що подальша робота
							здається абсолютно неможливою?
						</p>
					</AccentElement>
				</Section>
				<Section bgColor="darker" className="flex-section">
					<h1>Ні!</h1>
					<RollingFragment>
						Сліпо слідуючи своїми захопленнями,
					</RollingFragment>
					<RollingFragment>
						розробники самі ведуть себе в пастку!
					</RollingFragment>
				</Section>
			</>
		);
	}
	return (
		<Section bgColor="darker" className={styles.section}>
			<p className="font-weight-light">
				<small>Питання до аудиторії:</small>
			</p>
			<div className="fragment _no-will-change">
				<AccentElement>
					<p
						className="question"
						style={{ lineHeight: 1.5, padding: '0 4rem' }}
					>
						<span>
							Чи може{' '}
							<span style={{ borderBottom: '1px solid' }}>
								технологія
							</span>{' '}
							призвести до ситуації,{' '}
						</span>
						<RollingFragment maxHeight={100}>
							коли розробка проєкту <br />
							стає настільки складною та нестерпною,
						</RollingFragment>
						<RollingFragment maxHeight={100}>
							що подальша робота здається <br />
							абсолютно неможливою?
						</RollingFragment>
					</p>
				</AccentElement>
			</div>
		</Section>
	);
}
