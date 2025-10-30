<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Term from '$lib/components/Term.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertVolume, convertWeight, displayPH } from '$lib/utils/unitConversions';

	const title = 'Dyckia distachya<br>Endemic Brazilian Bromeliad';
	const badges = [
		'2 Protocol Options',
		'Somatic Embryogenesis',
		'Direct Organogenesis'
	];
	const introColumns = [
		'Dyckia genus (Pitcairnioideae) comprises 121 species occurring exclusively in southwest South America. Dyckia distachya is an endemic and endangered bromeliad native to western Santa Catarina State, southern Brazil.',
		'This bromeliad shows several ornamental features and occurs in the Brazilian Atlantic Forest, considered one of the most important plant diversity centers and a biodiversity hotspot. Most bromeliads in this biome are endemic.',
		'Two regenerative protocols are provided: somatic embryogenesis using Picloram induction, and direct organogenesis from seeds using BAP/Kinetin. Both serve conservation and commercial propagation needs.'
	];
	const source = 'Guerra & Dal Vesco (2010), Methods in Molecular Biology, vol. 589';
</script>

<svelte:head>
	<title>Dyckia distachya Protocol - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
	<ContentBlock title="Protocol A: Somatic Embryogenesis">
		<div class="protocol-section">
			<h4>Stage 1: Induction (8 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Collect green capsules from flower stalks of mother plants.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong><Term abbr="Sterilization" />:</strong> 70% ethanol (<Timer duration={120} label="EtOH">2 min</Timer>) → 1.5% sodium hypochlorite + 2-3 drops Tween 20 (<Timer duration={1200} label="Bleach">20 min</Timer>) → rinse 3× in <Term abbr="sterile water" />
				</li>
				<li>
					<span class="step-number">Step 3</span>
					Open capsules aseptically and inoculate 10 seeds per Petri dish.
				</li>
				<li>
					<span class="step-number">Step 4</span>
					<strong>Medium:</strong> <Term abbr="MS" /> salts + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="Agar" /> {convertWeight(6, $unitSystem)}/L + <Term abbr="Picloram" /> (5 μM)
				</li>
				<li>
					<span class="step-number">Step 5</span>
					Use {convertVolume(20, $unitSystem)} medium per Petri dish.
				</li>
				<li>
					<span class="step-number">Step 6</span>
					<strong>Culture in dark:</strong> {convertTemp(25, $unitSystem)} ± 1°C, 60% ± 5% RH
				</li>
				<li>
					<span class="step-number">Step 7</span>
					After <Timer duration={4838400} label="Induction">8 weeks</Timer>, proembryogenic cellular masses are observed.
				</li>
			</ol>

			<h4>Stage 2: Development (6 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Proembryogenic masses evolve into embryogenic cultures after <Timer duration={3628800} label="Development">6 more weeks</Timer> in dark.
				</li>
			</ol>

			<h4>Stage 3: Maturation & Conversion (30-45 days)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Subculture {convertWeight(0.5, $unitSystem)} embryogenic cultures in Petri dishes.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					Use {convertVolume(20, $unitSystem)} culture medium per dish.
				</li>
				<li>
					<span class="step-number">Step 3</span>
					<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="Agar" /> {convertWeight(6, $unitSystem)}/L + <Term abbr="2-iP" /> (5 μM) + <Term abbr="NAA" /> (0.5 μM)
				</li>
				<li>
					<span class="step-number">Step 4</span>
					<strong>Transfer to light:</strong> {convertTemp(25, $unitSystem)} ± 2°C, 16h <Term abbr="photoperiod" /> (50-60 μmol/m²/s)
				</li>
				<li>
					<span class="step-number">Step 5</span>
					After <Timer duration={2592000} label="Conversion">30-45 days</Timer>, somatic embryos develop to mature stage and convert to plantlets.
				</li>
			</ol>

			<h4>Stage 4: Plantlet Development</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Subculture plantlets in Petri dishes with {convertVolume(20, $unitSystem)} fresh medium.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="Agar" /> {convertWeight(6, $unitSystem)}/L, <strong>free of <Term abbr="PGR" /></strong>
				</li>
				<li>
					<span class="step-number">Step 3</span>
					Allow initial plantlet development in hormone-free medium.
				</li>
			</ol>

			<h4>Stage 5: Acclimatization (6 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Transfer shoots &gt;3 cm to 72-cell trays (120 cm³ each).
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong>Substrate options:</strong>
					<ul>
						<li>1:1 (v:v) carbonized rice coat + Turfa Fértil® (N:4%, P₂O₅:14%, K₂O:8%), <em>or</em></li>
						<li>2:2:1 (v:v:v) peat : vermiculite : sand</li>
					</ul>
				</li>
				<li>
					<span class="step-number">Step 3</span>
					Greenhouse with controlled mist for <Timer duration={3628800} label="Acclimatization">6 weeks</Timer>.
				</li>
			</ol>
		</div>
	</ContentBlock>

	<ContentBlock title="Protocol B: Direct Organogenesis from Seeds">
		<div class="protocol-section">
			<h4>Stage 1: Seed Collection & Sterilization</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Collect seed-containing capsules from mother plants and seal in polyethylene bags.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong><Term abbr="Sterilization" />:</strong> Same as Protocol A (see above)
				</li>
			</ol>

			<h4>Stage 2: Induction (6 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Open capsules aseptically and inoculate 10 seeds per Petri dish.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					Use {convertVolume(20, $unitSystem)} culture medium per dish.
				</li>
				<li>
					<span class="step-number">Step 3</span>
					<strong>Medium:</strong> <Term abbr="MS" /> salts + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="Agar" /> Sigma® {convertWeight(6, $unitSystem)}/L + <Term abbr="BAP" /> (2 μM) + <Term abbr="Kinetin" /> (2 μM)
				</li>
				<li>
					<span class="step-number">Step 4</span>
					<strong>Conditions:</strong> {convertTemp(25, $unitSystem)} ± 2°C, 16h light, 60% ± 5% RH
				</li>
			</ol>

			<h4>Stage 3: Multiplication (6 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					After <Timer duration={3628800} label="Initial Growth">6 weeks</Timer>, subculture 5-8 shoot clusters per 300 mL flask.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					Use {convertVolume(15, $unitSystem)} liquid culture medium per flask.
				</li>
				<li>
					<span class="step-number">Step 3</span>
					<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="NAA" /> (2 μM) + <Term abbr="BAP" /> (4 μM) + <Term abbr="Paclobutrazol" /> (PBZ) (6 μM)
				</li>
			</ol>

			<h4>Stage 4: Elongation (6 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Subculture 5-8 clusters for <Timer duration={3628800} label="Elongation">6 more weeks</Timer>.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					Use 300 mL flasks with {convertVolume(20, $unitSystem)} liquid medium.
				</li>
				<li>
					<span class="step-number">Step 3</span>
					<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="GA₃" /> (5 μM)
				</li>
			</ol>

			<h4>Stage 5: Acclimatization (18 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Transfer shoots &gt;3.0 cm to trays of 128 cells (60 cm³ each).
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong>Substrate:</strong> 2:2:1 (v:v:v) peat : vermiculite : sand
				</li>
				<li>
					<span class="step-number">Step 3</span>
					Greenhouse with controlled mist for <Timer duration={10886400} label="Extended Acclim">18 weeks</Timer>.
				</li>
				<li>
					<span class="step-number">Step 4</span>
					<strong>Survival rate:</strong> 92%
				</li>
			</ol>
		</div>
	</ContentBlock>

	<ContentBlock title="Protocol Comparison">
		<table>
			<thead>
				<tr>
					<th>Aspect</th>
					<th>Protocol A (Somatic Embryo)</th>
					<th>Protocol B (Organogenesis)</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><strong>Explant</strong></td>
					<td>Seeds from green capsules</td>
					<td>Seeds from mature capsules</td>
				</tr>
				<tr>
					<td><strong>Induction</strong></td>
					<td>Picloram (5 μM) in dark</td>
					<td>BAP (2 μM) + Kin (2 μM) in light</td>
				</tr>
				<tr>
					<td><strong>Pathway</strong></td>
					<td>Proembryogenic → embryogenic → plantlet</td>
					<td>Direct shoot formation</td>
				</tr>
				<tr>
					<td><strong>Induction Time</strong></td>
					<td>14 weeks (dark)</td>
					<td>6 weeks (light)</td>
				</tr>
				<tr>
					<td><strong>Multiplication</strong></td>
					<td>2-iP (5 μM) + NAA (0.5 μM)</td>
					<td>NAA (2 μM) + BAP (4 μM) + PBZ (6 μM)</td>
				</tr>
				<tr>
					<td><strong>Acclimatization</strong></td>
					<td>6 weeks</td>
					<td>18 weeks</td>
				</tr>
				<tr>
					<td><strong>Survival</strong></td>
					<td>Not specified</td>
					<td>92%</td>
				</tr>
				<tr>
					<td><strong>Best For</strong></td>
					<td>High multiplication potential</td>
					<td>Faster, simpler protocol</td>
				</tr>
			</tbody>
		</table>
	</ContentBlock>

	<ContentBlock title="Key Success Factors">
		<div class="success-grid">
			<div>
				<h4>Protocol A (Somatic Embryogenesis)</h4>
				<ul>
					<li><strong>Dark culture essential:</strong> Embryogenic induction requires complete darkness</li>
					<li><strong>Picloram concentration:</strong> 5 μM optimal for proembryogenic mass formation</li>
					<li><strong>Light transition:</strong> Transfer to light only after embryogenic cultures form</li>
					<li><strong>2-iP conversion:</strong> Critical for embryo maturation and plantlet conversion</li>
					<li><strong>PGR-free development:</strong> Allows natural plantlet establishment</li>
				</ul>
			</div>
			<div>
				<h4>Protocol B (Direct Organogenesis)</h4>
				<ul>
					<li><strong>Dual cytokinin:</strong> BAP + Kinetin combination promotes direct shoot formation</li>
					<li><strong>PBZ application:</strong> Prevents hyperhydricity, produces compact shoots</li>
					<li><strong>GA₃ elongation:</strong> Essential for achieving adequate shoot size</li>
					<li><strong>Extended acclimatization:</strong> 18 weeks needed for 92% survival</li>
					<li><strong>Substrate drainage:</strong> Peat:vermiculite:sand mix ideal for this terrestrial species</li>
				</ul>
			</div>
		</div>
	</ContentBlock>
</ProtocolLayout>

<style>
	.protocol-section {
		margin-bottom: 2rem;
	}
	
	.protocol-section h4 {
		color: var(--accent-color, #4a9f7c);
		margin: 1.5rem 0 0.75rem 0;
		font-size: 1.1rem;
	}
	
	.protocol-section h4:first-child {
		margin-top: 0;
	}

	.success-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-top: 1rem;
	}

	.success-grid h4 {
		color: var(--accent-color, #4a9f7c);
		margin: 0 0 0.75rem 0;
	}

	.success-grid ul {
		margin: 0;
		padding-left: 1.25rem;
	}

	.success-grid li {
		margin: 0.5rem 0;
	}
</style>
