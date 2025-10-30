<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Term from '$lib/components/Term.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertVolume, convertWeight, displayPH } from '$lib/utils/unitConversions';

	const title = 'Vriesea fosteriana<br>Large Ornamental';
	const badges = [
		'TDZ Protocol',
		'Encapsulation Available',
		'Survival: 85-98%'
	];
	const introColumns = [
		'Vriesea fosteriana is a large bromeliad species spreading from Brazil to Mexico. It shows broad, mid-green leaves with a reddish-brown band on both sides. The foliage can grow up to 1-m long forming a dense rosette.',
		'From the center a conspicuous flower stalk reaches upwards to 1.5 m, developing a yellow flower from each bract. This species is highly valued in ornamental horticulture.',
		'Two protocols are provided: standard TDZ multiplication for mass propagation, and an innovative encapsulation protocol for synthetic seed production and long-term storage.'
	];
	const source = 'Guerra & Dal Vesco (2010), Methods in Molecular Biology, vol. 589';
</script>

<svelte:head>
	<title>Vriesea fosteriana Protocol - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
	<ContentBlock title="Standard Protocol: Direct Organogenesis with TDZ">
		<div class="protocol-section">
			<h4>Stage 1: Induction (10 weeks + 18 weeks subculture)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Inoculate buds over filter paper bridges in test tubes (25 mm × 150 mm).
				</li>
				<li>
					<span class="step-number">Step 2</span>
					Use {convertVolume(15, $unitSystem)} liquid medium: <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="NAA" /> (2 μM) + <Term abbr="BAP" /> (4 μM)
				</li>
				<li>
					<span class="step-number">Step 3</span>
					After <Timer duration={6048000} label="Initial Induction">10 weeks</Timer>, nodule cluster cultures arise.
				</li>
				<li>
					<span class="step-number">Step 4</span>
					Subculture 3 times, every 6 weeks, in same medium (total 18 more weeks).
				</li>
			</ol>

			<h4>Stage 2: Multiplication with TDZ</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Subculture 5-8 microshoot clusters per 300 mL flask.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					Use {convertVolume(15, $unitSystem)} liquid medium per flask.
				</li>
				<li>
					<span class="step-number">Step 3</span>
					<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="TDZ" /> (0.1 μM)
				</li>
				<li>
					<span class="step-number">Step 4</span>
					<strong>Multiplication rate:</strong> 14:1
				</li>
			</ol>

			<h4>Stage 3: Elongation (10 weeks)</h4>
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
					<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L, <strong>free of <Term abbr="PGR" /></strong>
				</li>
			</ol>

			<h4>Stage 4: Acclimatization (9 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Transfer shoots ≥3.0 cm to trays of 128 cells (60 cm³ each).
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong>Substrate:</strong> 2:1:1 (v:v:v) Plantmax® HA : pine bark : carbonized rice coat
				</li>
				<li>
					<span class="step-number">Step 3</span>
					Nebulization tunnel, <Timer duration={5443200} label="Acclimatization">9 weeks</Timer>.
				</li>
				<li>
					<span class="step-number">Step 4</span>
					<strong>Survival rate:</strong> 98%
				</li>
			</ol>
		</div>
	</ContentBlock>

	<ContentBlock title="Encapsulation Protocol: Synthetic Seed Production">
		<div class="protocol-section">
			<h4>Preparation: Standard Multiplication (24 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Follow standard induction protocol (see above).
				</li>
				<li>
					<span class="step-number">Step 2</span>
					After 3-4 subcultures (5-7 weeks each), achieve multiple shoot proliferation.
				</li>
			</ol>

			<h4>Induction of Encapsulated Units (8 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Subculture 5-8 clusters in 300 mL flasks with {convertVolume(20, $unitSystem)} medium.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong>Medium:</strong> <Term abbr="MS" /> + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="NAA" /> (2 μM) + <Term abbr="BAP" /> (4 μM) + <Term abbr="Paclobutrazol" /> (4.0 μM)
				</li>
				<li>
					<span class="step-number">Step 3</span>
					After <Timer duration={4838400} label="PBZ Treatment">8 weeks</Timer>, multiplication rate reaches 13:1.
				</li>
				<li>
					<span class="step-number">Step 4</span>
					Select shoots 0.5-1.0 cm long for encapsulation.
				</li>
			</ol>

			<h4>Encapsulation Process</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					<strong>Prepare alginate matrix:</strong> 1% sodium alginate in ½ strength <Term abbr="MS" /> salts + <Term abbr="GA₃" /> (5 μM)
				</li>
				<li>
					<span class="step-number">Step 2</span>
					Immerse individual shoots (0.5-1.0 cm) in alginate solution.
				</li>
				<li>
					<span class="step-number">Step 3</span>
					<strong>Complexation:</strong> Drop alginate-coated shoots into 50 mM CaCl₂ solution.
				</li>
				<li>
					<span class="step-number">Step 4</span>
					Maintain in CaCl₂ for <Timer duration={600} label="Complexation">10 minutes</Timer> to form gel beads.
				</li>
				<li>
					<span class="step-number">Step 5</span>
					Wash encapsulated units thoroughly in tap water.
				</li>
				<li>
					<span class="step-number">Step 6</span>
					<strong>Storage:</strong> Store capsules at {convertTemp(5, $unitSystem)} for <Timer duration={2419200} label="Cold Storage">4 weeks</Timer>.
				</li>
			</ol>

			<h4>Decomplexation & Sowing</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Treat capsules with 100 mM KNO₃ solution for <Timer duration={1200} label="Decomplexation">20 minutes</Timer> before sowing.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					Transfer synthetic seeds to trays of 220 cells (13 cm³ each).
				</li>
				<li>
					<span class="step-number">Step 3</span>
					<strong>Substrate:</strong> Vermiculite
				</li>
			</ol>

			<h4>Ex Vitro Conversion in Phytotron</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Place trays inside plastic boxes covered with glass to allow light entry and reduce water exchange.
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong>Conditions:</strong> {convertTemp(25, $unitSystem)} ± 2°C, 16h light (400 μmol/m²/s)
				</li>
				<li>
					<span class="step-number">Step 3</span>
					Periodically wet germinating capsules with ¼ <Term abbr="MS" /> salts solution.
				</li>
				<li>
					<span class="step-number">Step 4</span>
					After <Timer duration={3024000} label="Initial Germination">5 weeks</Timer>, transfer trays to greenhouse.
				</li>
			</ol>

			<h4>Final Acclimatization (8 weeks)</h4>
			<ol class="step-list">
				<li>
					<span class="step-number">Step 1</span>
					Transfer plantlets to trays of 128 cells (60 cm³ each).
				</li>
				<li>
					<span class="step-number">Step 2</span>
					<strong>Substrate:</strong> 1:1 (v:v) carbonized rice coat + Turfa Fértil® (N:4%, P₂O₅:14%, K₂O:8%)
				</li>
				<li>
					<span class="step-number">Step 3</span>
					Nebulization tunnel with intermittent mist.
				</li>
				<li>
					<span class="step-number">Step 4</span>
					<strong>Duration:</strong> <Timer duration={4838400} label="Final Acclim">8 weeks</Timer>
				</li>
				<li>
					<span class="step-number">Step 5</span>
					<strong>Survival rate:</strong> 85%
				</li>
				<li>
					<span class="step-number">Step 6</span>
					Transfer to pots and maintain in greenhouse for <Timer duration={6048000} label="Greenhouse">10 more weeks</Timer>.
				</li>
			</ol>
		</div>
	</ContentBlock>

	<ContentBlock title="Protocol Comparison">
		<table>
			<thead>
				<tr>
					<th>Aspect</th>
					<th>Standard TDZ</th>
					<th>Encapsulation</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><strong>Multiplication Rate</strong></td>
					<td>14:1</td>
					<td>13:1</td>
				</tr>
				<tr>
					<td><strong>Survival Rate</strong></td>
					<td>98%</td>
					<td>85%</td>
				</tr>
				<tr>
					<td><strong>Storage Capability</strong></td>
					<td>Limited</td>
					<td>4 weeks at 5°C</td>
				</tr>
				<tr>
					<td><strong>Acclimatization</strong></td>
					<td>In vitro → ex vitro</td>
					<td>Direct ex vitro</td>
				</tr>
				<tr>
					<td><strong>Key Advantage</strong></td>
					<td>Higher survival</td>
					<td>Storage & transport</td>
				</tr>
				<tr>
					<td><strong>Best For</strong></td>
					<td>Mass propagation</td>
					<td>Germplasm conservation</td>
				</tr>
			</tbody>
		</table>
	</ContentBlock>

	<ContentBlock title="Key Success Factors">
		<ul>
			<li><strong>TDZ efficiency:</strong> Very low concentration (0.1 μM) reduces costs significantly vs BAP/NAA</li>
			<li><strong>PBZ treatment:</strong> Paclobutrazol produces compact shoots ideal for encapsulation</li>
			<li><strong>Shoot size for encapsulation:</strong> 0.5-1.0 cm optimal for alginate bead formation</li>
			<li><strong>Complexation time:</strong> Exactly 10 minutes in CaCl₂ ensures proper gel formation</li>
			<li><strong>Cold storage:</strong> 4 weeks at 5°C extends viability and synchronizes germination</li>
			<li><strong>Decomplexation:</strong> KNO₃ treatment essential before sowing to soften alginate matrix</li>
			<li><strong>Ex vitro germination:</strong> Vermiculite + phytotron conditions allow direct conversion without traditional tissue culture</li>
		</ul>
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
</style>
