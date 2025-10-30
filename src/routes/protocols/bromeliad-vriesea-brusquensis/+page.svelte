<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Term from '$lib/components/Term.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertVolume, convertWeight, displayPH } from '$lib/utils/unitConversions';

	const title = 'Vriesea brusquensis<br>Temporary Immersion System';
	const badges = [
		'TIS Protocol',
		'PBZ: 2 μM',
		'Mass Propagation'
	];
	const introColumns = [
		'Vriesea brusquensis is propagated using Temporary Immersion Systems (TIS), an advanced technique for mass propagation of bromeliads. This protocol was developed at the Laboratory of Plant Developmental Physiology and Genetics (LFDGV/CCA/UFSC).',
		'TIS offers significant advantages over conventional tissue culture including increased multiplication rates, improved acclimatization responses, and decreased production costs through reduced manipulation, labor, and container requirements.',
		'This species requires a lower Paclobutrazol concentration (2 μM) compared to Aechmea fasciata (6 μM), demonstrating species-specific optimization within the TIS framework.'
	];
	const source = 'Guerra & Dal Vesco (2010), Methods in Molecular Biology, vol. 589';
</script>

<svelte:head>
	<title>Vriesea brusquensis TIS Protocol - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
	<ContentBlock title="Temporary Immersion System Overview">
		<div class="info-box">
			<p><strong>TIS Technology</strong> provides automated periodic immersion of plant cultures in liquid medium, combining optimal nutrient delivery with excellent gas exchange. The system drastically improves multiplication efficiency.</p>
			<p><strong>Key Benefits for V. brusquensis:</strong></p>
			<ul>
				<li>High multiplication rates (up to 30:1)</li>
				<li>Synchronized shoot development</li>
				<li>Reduced labor and contamination risk</li>
				<li>Superior plantlet quality for acclimatization</li>
				<li>Economically viable for commercial production</li>
			</ul>
		</div>
	</ContentBlock>

	<ContentBlock title="TIS Equipment Setup">
		<ul>
			<li><strong>Bioreactor containers:</strong> 300-500 mL capacity TIS vessels
				<ul>
					<li>RITA® apparatus (commercial)</li>
					<li>Custom LFDGV/CCA/UFSC apparatus</li>
					<li>Standard TIS systems</li>
				</ul>
			</li>
			<li><strong>Air delivery system:</strong> Compressed air with 0.22 μm sterile filtration</li>
			<li><strong>Programmable timer:</strong> Precise 3h stationary : 3min immersion cycles</li>
			<li><strong>Culture environment:</strong> Standard tissue culture room ({convertTemp(25, $unitSystem)} ± 2°C, 16h photoperiod)</li>
		</ul>
	</ContentBlock>

	<ContentBlock title="Stage 1: Initial Induction (8 weeks)">
		<p><em>Conventional liquid culture before TIS transfer</em></p>
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Inoculate buds over filter paper bridges in test tubes (25 mm × 150 mm).
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Use {convertVolume(15, $unitSystem)} liquid medium per tube.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				<strong>Medium composition:</strong> <Term abbr="MS" /> salts + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="NAA" /> (2 μM) + <Term abbr="BAP" /> (4 μM)
			</li>
			<li>
				<span class="step-number">Step 4</span>
				<strong>Culture conditions:</strong> {convertTemp(25, $unitSystem)} ± 2°C, 16h light (50-60 μmol/m²/s), 60% ± 5% RH
			</li>
			<li>
				<span class="step-number">Step 5</span>
				After <Timer duration={4838400} label="Initial Induction">8 weeks</Timer>, clusters containing 5-8 shoots (average 0.5 cm) are obtained.
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 2: TIS Multiplication (12 weeks)">
		<div class="highlight-box">
			<strong>Species-Specific PBZ Concentration</strong>
			<p>Vriesea brusquensis requires only 2 μM Paclobutrazol, compared to 6 μM for Aechmea fasciata. This lower concentration prevents over-compaction while still promoting healthy microshoot proliferation.</p>
		</div>
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Transfer 8-10 shoot clusters to each TIS unit under aseptic conditions.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Add 300-500 mL liquid medium per container (volume varies by container type).
			</li>
			<li>
				<span class="step-number">Step 3</span>
				<strong>Medium composition:</strong> <Term abbr="MS" /> salts + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="Paclobutrazol" /> (PBZ) (2 μM)
			</li>
			<li>
				<span class="step-number">Step 4</span>
				<strong>Immersion cycle:</strong> Program timer for 3 hours stationary : 3 minutes immersion
			</li>
			<li>
				<span class="step-number">Step 5</span>
				After <Timer duration={3628800} label="First Period">6 weeks</Timer>, replace culture medium (which normally acquires a dark-brown color due to phenolic oxidation).
			</li>
			<li>
				<span class="step-number">Step 6</span>
				Continue for <Timer duration={3628800} label="Second Period">6 more weeks</Timer> with fresh medium (total 12 weeks in multiplication).
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 3: TIS Elongation (6 weeks)">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Replace culture medium in TIS containers.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				<strong>Medium composition:</strong> <Term abbr="MS" /> salts + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="GA₃" /> (10 μM)
			</li>
			<li>
				<span class="step-number">Step 3</span>
				GA₃ replaces PBZ to synchronously elongate the microshoots.
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Continue same immersion cycle (3h stationary : 3min immersion).
			</li>
			<li>
				<span class="step-number">Step 5</span>
				After <Timer duration={3628800} label="Elongation">6 weeks</Timer>, regeneration rate may reach <strong>30:1</strong>.
			</li>
			<li>
				<span class="step-number">Step 6</span>
				Shoots should be ≥3 cm long and ready for acclimatization.
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 4: Acclimatization (6 weeks)">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Carefully remove shoots ≥3 cm from TIS containers.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Gently rinse shoots in tap water to remove residual culture medium.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				If roots are present, prune to approximately 1 cm length (roots not essential for success).
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Transfer to trays of 128 cells (60 cm³ per cell).
			</li>
			<li>
				<span class="step-number">Step 5</span>
				<strong>Substrate composition:</strong> 2:1:1 (v:v:v) Plantmax® HA : pine bark : carbonized rice coat
			</li>
			<li>
				<span class="step-number">Step 6</span>
				Place trays in greenhouse with controlled mist system.
			</li>
			<li>
				<span class="step-number">Step 7</span>
				Provide 50% shade using shade cloth or greenhouse screening.
			</li>
			<li>
				<span class="step-number">Step 8</span>
				Weekly spray with ¼ <Term abbr="MS" /> salts solution for nutrition.
			</li>
			<li>
				<span class="step-number">Step 9</span>
				<strong>Duration:</strong> <Timer duration={3628800} label="Acclimatization">6 weeks</Timer> in controlled mist environment
			</li>
			<li>
				<span class="step-number">Step 10</span>
				<strong>Expected outcome:</strong> High survival rate due to superior TIS-produced plantlet quality
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Comparison: V. brusquensis vs A. fasciata TIS">
		<table>
			<thead>
				<tr>
					<th>Parameter</th>
					<th>V. brusquensis</th>
					<th>A. fasciata</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><strong>Induction</strong></td>
					<td>8 weeks, NAA + BAP</td>
					<td>8 weeks, NAA + BAP</td>
				</tr>
				<tr>
					<td><strong>PBZ Concentration</strong></td>
					<td>2 μM</td>
					<td>6 μM</td>
				</tr>
				<tr>
					<td><strong>Multiplication Duration</strong></td>
					<td>12 weeks</td>
					<td>12 weeks</td>
				</tr>
				<tr>
					<td><strong>GA₃ Elongation</strong></td>
					<td>10 μM, 6 weeks</td>
					<td>10 μM, 6 weeks</td>
				</tr>
				<tr>
					<td><strong>Immersion Cycle</strong></td>
					<td>3h : 3min</td>
					<td>3h : 3min</td>
				</tr>
				<tr>
					<td><strong>Multiplication Rate</strong></td>
					<td>Up to 30:1</td>
					<td>Up to 30:1</td>
				</tr>
				<tr>
					<td><strong>Total Time</strong></td>
					<td>32 weeks</td>
					<td>32 weeks</td>
				</tr>
			</tbody>
		</table>
	</ContentBlock>

	<ContentBlock title="TIS Operation & Troubleshooting">
		<div class="troubleshooting-grid">
			<div>
				<h4>Normal Observations</h4>
				<ul>
					<li><strong>Medium color:</strong> Dark brown after 6 weeks is normal (phenolic oxidation)</li>
					<li><strong>Shoot clusters:</strong> Will increase in density during multiplication phase</li>
					<li><strong>Root formation:</strong> Some adventitious roots may form - this is normal</li>
					<li><strong>Shoot size variation:</strong> GA₃ treatment synchronizes elongation</li>
				</ul>
			</div>
			<div>
				<h4>Common Issues & Solutions</h4>
				<ul>
					<li><strong>Hyperhydricity:</strong> Reduce immersion time or check drainage system</li>
					<li><strong>Slow growth:</strong> Replace medium more frequently (every 4 weeks)</li>
					<li><strong>Contamination:</strong> Check air filter (0.22 μm) integrity, replace if needed</li>
					<li><strong>Uneven development:</strong> Redistribute shoots evenly in container</li>
					<li><strong>Chlorosis:</strong> Increase light intensity or check nutrient levels</li>
				</ul>
			</div>
		</div>
	</ContentBlock>

	<ContentBlock title="Protocol Timeline Summary">
		<table>
			<thead>
				<tr>
					<th>Week</th>
					<th>Stage</th>
					<th>Action</th>
					<th>Medium</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>0-8</td>
					<td>Induction</td>
					<td>Conventional liquid culture</td>
					<td>MS + NAA (2 μM) + BAP (4 μM)</td>
				</tr>
				<tr>
					<td>8-14</td>
					<td>TIS Multiplication 1</td>
					<td>First TIS cycle</td>
					<td>MS + PBZ (2 μM)</td>
				</tr>
				<tr>
					<td>14</td>
					<td>Medium Change</td>
					<td>Replace dark medium</td>
					<td>Fresh MS + PBZ (2 μM)</td>
				</tr>
				<tr>
					<td>14-20</td>
					<td>TIS Multiplication 2</td>
					<td>Second TIS cycle</td>
					<td>MS + PBZ (2 μM)</td>
				</tr>
				<tr>
					<td>20-26</td>
					<td>TIS Elongation</td>
					<td>Synchronous elongation</td>
					<td>MS + GA₃ (10 μM)</td>
				</tr>
				<tr>
					<td>26-32</td>
					<td>Acclimatization</td>
					<td>Ex vitro establishment</td>
					<td>2:1:1 substrate, mist system</td>
				</tr>
			</tbody>
		</table>
	</ContentBlock>

	<ContentBlock title="Key Success Factors">
		<ul>
			<li><strong>PBZ optimization:</strong> 2 μM is species-specific for V. brusquensis - do not use A. fasciata concentration</li>
			<li><strong>Cycle precision:</strong> Maintain exact 3h:3min timing for optimal results</li>
			<li><strong>Medium replacement:</strong> Essential at 6-week intervals to prevent nutrient depletion</li>
			<li><strong>GA₃ synchronization:</strong> Switching to GA₃ ensures uniform shoot elongation across entire culture</li>
			<li><strong>Sterile air filtration:</strong> Always use 0.22 μm filters to prevent airborne contamination</li>
			<li><strong>Complete drainage:</strong> Verify system drains fully between cycles to prevent waterlogging</li>
			<li><strong>Shoot distribution:</strong> Evenly space clusters in TIS container for uniform access to medium</li>
			<li><strong>Minimum size:</strong> Only transfer shoots ≥3 cm to acclimatization for maximum survival</li>
			<li><strong>Economic viability:</strong> 30:1 multiplication rate makes TIS highly cost-effective for commercial scale</li>
		</ul>
	</ContentBlock>
</ProtocolLayout>

<style>
	.info-box {
		background: var(--info-bg, #e8f4f8);
		border-left: 4px solid var(--accent-color, #4a9f7c);
		padding: 1.25rem;
		margin: 1rem 0;
	}
	
	.info-box p {
		margin: 0.5rem 0;
		line-height: 1.6;
	}

	.info-box ul {
		margin: 0.5rem 0;
		padding-left: 1.5rem;
	}

	.highlight-box {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		padding: 1.25rem;
		border-radius: 8px;
		margin: 1rem 0;
	}
	
	.highlight-box strong {
		display: block;
		margin-bottom: 0.5rem;
		font-size: 1.1rem;
	}
	
	.highlight-box p {
		margin: 0;
		line-height: 1.6;
		opacity: 0.95;
	}

	.troubleshooting-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-top: 1rem;
	}

	.troubleshooting-grid h4 {
		color: var(--accent-color, #4a9f7c);
		margin: 0 0 0.75rem 0;
	}

	.troubleshooting-grid ul {
		margin: 0;
		padding-left: 1.25rem;
	}

	.troubleshooting-grid li {
		margin: 0.5rem 0;
	}
</style>
