<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Term from '$lib/components/Term.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertVolume, convertWeight, displayPH } from '$lib/utils/unitConversions';

	const title = 'Vriesea splendens<br>Flaming Sword';
	const badges = [
		'TDZ Protocol',
		'Survival: 95%',
		'Brilliant Bracts'
	];
	const introColumns = [
		'Vriesea splendens, commonly known as "flaming sword," is a bromeliad with lance-shaped or linear, green or purplish foliage 30-45 cm long. The leaves have smooth margins and may have colorful bracts at the leaf bases.',
		'From the center of the funnel-shaped rosette emerges an upright inflorescence consisting of a flattened stem of brilliant red or orange overlapping bracts with yellow flowers. The bracts are brightly colored and last for months.',
		'In natural populations, it grows as an epiphyte and terrestrial in lower levels of dense forests of tropical Trinidad, Venezuela, Guyana and Surinam. This protocol uses Thidiazuron for cost-effective multiplication.'
	];
	const source = 'Guerra & Dal Vesco (2010), Methods in Molecular Biology, vol. 589';
</script>

<svelte:head>
	<title>Vriesea splendens Protocol - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
	<ContentBlock title="Stage 1: Induction (8 weeks)">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Inoculate buds over filter paper bridges in test tubes (25 mm × 150 mm).
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Use {convertVolume(15, $unitSystem)} liquid culture medium per tube.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				<strong>Medium composition:</strong> <Term abbr="MS" /> salts + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="NAA" /> (1 μM) + <Term abbr="BAP" /> (2 μM)
			</li>
			<li>
				<span class="step-number">Step 4</span>
				<strong>Conditions:</strong> {convertTemp(25, $unitSystem)} ± 2°C, 16h light (50-60 μmol/m²/s), 60% ± 5% RH
			</li>
			<li>
				<span class="step-number">Step 5</span>
				After <Timer duration={4838400} label="Initial Induction">8 weeks</Timer>, new buds and shoots develop from explants.
			</li>
			<li>
				<span class="step-number">Step 6</span>
				After <Timer duration={4838400} label="Additional Induction">another 8 weeks</Timer> (total 16 weeks), adventitious shoots from nodule cluster cultures arise.
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 2: Establishment & Development (16 weeks)">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Subculture {convertWeight(0.10, $unitSystem)} nodular cluster cultures over filter paper bridges.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Use test tubes (25 mm × 150 mm) containing {convertVolume(15, $unitSystem)} liquid medium.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				<strong>Medium:</strong> Same as induction stage but <strong>devoid of <Term abbr="PGR" /></strong> (plant growth regulators).
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Subculture twice at 8-week intervals in PGR-free medium.
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 3: Multiplication with Thidiazuron">
		<div class="info-box">
			<strong>Why Thidiazuron (TDZ)?</strong>
			<p>TDZ is more cost-effective than traditional BAP/NAA combinations. At lower concentrations compared to BAP and NAA, TDZ significantly reduces overall production costs while maintaining high multiplication rates.</p>
		</div>
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Subculture {convertWeight(0.5, $unitSystem)} nodular cluster cultures in 300 mL flasks.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Use {convertVolume(25, $unitSystem)} liquid medium per flask.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="Thidiazuron" /> (0.1 μM)
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Culture for multiplication cycle (duration varies by response).
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 4: Elongation (12 weeks)">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Subculture 8-10 microshoot clusters per 300 mL flask.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Use {convertVolume(15, $unitSystem)} liquid medium per flask.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="GA₃" /> (10 μM)
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Shoots elongate over <Timer duration={7257600} label="Elongation">12 weeks</Timer> to ≥3 cm for acclimatization.
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 5: Acclimatization (8 weeks)">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Transfer shoots &gt;3 cm to trays of 128 cells (60 cm³ each).
			</li>
			<li>
				<span class="step-number">Step 2</span>
				<strong>Substrate composition:</strong> 2:1:1 (v:v:v) Plantmax® HA : pine bark : carbonized rice coat
			</li>
			<li>
				<span class="step-number">Step 3</span>
				Place trays in greenhouse with controlled mist and 50% shade.
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Weekly spray with ¼ <Term abbr="MS" /> salts solution.
			</li>
			<li>
				<span class="step-number">Step 5</span>
				<strong>Duration:</strong> <Timer duration={4838400} label="Acclimatization">8 weeks</Timer>
			</li>
			<li>
				<span class="step-number">Step 6</span>
				<strong>Survival rate:</strong> 95%
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Protocol Timeline">
		<table>
			<thead>
				<tr>
					<th>Stage</th>
					<th>Duration</th>
					<th>Key Hormone</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Induction</td>
					<td>8-16 weeks</td>
					<td>NAA (1 μM) + BAP (2 μM)</td>
				</tr>
				<tr>
					<td>Establishment</td>
					<td>16 weeks (2× 8 weeks)</td>
					<td>PGR-free</td>
				</tr>
				<tr>
					<td>Multiplication</td>
					<td>Variable</td>
					<td>TDZ (0.1 μM)</td>
				</tr>
				<tr>
					<td>Elongation</td>
					<td>12 weeks</td>
					<td>GA₃ (10 μM)</td>
				</tr>
				<tr>
					<td>Acclimatization</td>
					<td>8 weeks</td>
					<td>N/A</td>
				</tr>
			</tbody>
		</table>
	</ContentBlock>

	<ContentBlock title="Key Success Factors">
		<ul>
			<li><strong>Low hormone induction:</strong> NAA and BAP at 1-2 μM concentrations prevent hyperhydricity</li>
			<li><strong>PGR-free establishment:</strong> Extended period without hormones stabilizes cultures</li>
			<li><strong>TDZ efficiency:</strong> Very low concentration (0.1 μM) provides effective multiplication at reduced cost</li>
			<li><strong>GA₃ elongation:</strong> Essential for achieving minimum 3 cm shoot length</li>
			<li><strong>Substrate mix:</strong> Three-component substrate provides excellent drainage and nutrition</li>
			<li><strong>High survival:</strong> 95% success rate when minimum shoot size is achieved</li>
		</ul>
	</ContentBlock>
</ProtocolLayout>

<style>
	.info-box {
		background: var(--info-bg, #e8f4f8);
		border-left: 4px solid var(--accent-color, #4a9f7c);
		padding: 1rem;
		margin: 1rem 0;
	}
	
	.info-box strong {
		display: block;
		margin-bottom: 0.5rem;
		color: var(--accent-color, #4a9f7c);
	}
	
	.info-box p {
		margin: 0;
		line-height: 1.6;
	}
</style>
