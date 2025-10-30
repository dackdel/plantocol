<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Term from '$lib/components/Term.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertVolume, convertWeight, displayPH } from '$lib/utils/unitConversions';

	const title = 'Aechmea fasciata<br>Temporary Immersion System';
	const badges = [
		'TIS Protocol',
		'Multiplication: 30:1',
		'Mass Propagation'
	];
	const introColumns = [
		'Aechmea fasciata is propagated using Temporary Immersion Systems (TIS), which have proven highly effective for mass propagation of ornamental bromeliads. TIS provides superior results compared to conventional tissue culture.',
		'TIS benefits include increased multiplication rates (up to 30:1), improved responses during acclimatization, and decreased production costs through reduced manipulation, labor, space requirements, and fewer containers.',
		'The system uses automated immersion cycles (3h stationary : 3min immersion) that provide optimal nutrient delivery while preventing hyperhydricity and ensuring healthy shoot development.'
	];
	const source = 'Guerra & Dal Vesco (2010), Methods in Molecular Biology, vol. 589';
</script>

<svelte:head>
	<title>Aechmea fasciata TIS Protocol - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
	<ContentBlock title="What is a Temporary Immersion System (TIS)?">
		<div class="info-box">
			<p><strong>TIS is a semi-automated bioreactor system</strong> where plant cultures are periodically immersed in liquid medium and then drained back, combining the benefits of liquid culture (better nutrient uptake) with gas exchange of conventional culture.</p>
			<p><strong>Key advantages:</strong></p>
			<ul>
				<li>30:1 multiplication rate (vs 10-15:1 in conventional culture)</li>
				<li>Reduced labor and manipulation</li>
				<li>Lower contamination risk</li>
				<li>Better plantlet quality</li>
				<li>Automated nutrient delivery</li>
			</ul>
		</div>
	</ContentBlock>

	<ContentBlock title="TIS Equipment Requirements">
		<ul>
			<li><strong>TIS containers:</strong> 300-500 mL capacity bioreactor vessels (e.g., RITA® system or custom apparatus)</li>
			<li><strong>Air pump:</strong> Compressed air source for immersion/drainage</li>
			<li><strong>Timer:</strong> Programmable for 3h:3min cycles</li>
			<li><strong>Tubing & filters:</strong> Sterile air delivery system with 0.22 μm filters</li>
			<li><strong>Culture room:</strong> Standard tissue culture environment ({convertTemp(25, $unitSystem)} ± 2°C, 16h light)</li>
		</ul>
	</ContentBlock>

	<ContentBlock title="Stage 1: Initial Induction (8 weeks)">
		<p><em>This stage uses conventional liquid culture before TIS transfer</em></p>
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
				<strong>Medium:</strong> <Term abbr="MS" /> salts + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="NAA" /> (2 μM) + <Term abbr="BAP" /> (4 μM)
			</li>
			<li>
				<span class="step-number">Step 4</span>
				<strong>Conditions:</strong> {convertTemp(25, $unitSystem)} ± 2°C, 16h <Term abbr="photoperiod" /> (50-60 μmol/m²/s), 60% ± 5% RH
			</li>
			<li>
				<span class="step-number">Step 5</span>
				After <Timer duration={4838400} label="Initial Induction">8 weeks</Timer>, each bud produces clusters of 5-8 shoots (average 0.5 cm).
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 2: TIS Multiplication (12 weeks)">
		<div class="warning-box">
			<strong>⚠ Critical Setup Requirements</strong>
			<p>Ensure all TIS components are properly sterilized. The timer must be calibrated precisely for 3h stationary : 3min immersion cycles. Compressed air must be filtered through 0.22 μm filters to prevent contamination.</p>
		</div>
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Transfer 8-10 shoot clusters to each TIS unit.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Add 300-500 mL liquid medium per container (volume depends on container type).
			</li>
			<li>
				<span class="step-number">Step 3</span>
				<strong>Medium composition:</strong> <Term abbr="MS" /> salts + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="Paclobutrazol" /> (PBZ) (6 μM)
			</li>
			<li>
				<span class="step-number">Step 4</span>
				<strong>Immersion cycle:</strong> Set timer for 3 hours stationary : 3 minutes immersion
			</li>
			<li>
				<span class="step-number">Step 5</span>
				After <Timer duration={3628800} label="First TIS Cycle">6 weeks</Timer>, replace culture medium (becomes dark brown).
			</li>
			<li>
				<span class="step-number">Step 6</span>
				Continue for <Timer duration={3628800} label="Second TIS Cycle">6 more weeks</Timer> with fresh medium (total 12 weeks in TIS).
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
				<strong>Medium:</strong> <Term abbr="MS" /> salts + Morel vitamins + <Term abbr="Sucrose" /> {convertWeight(30, $unitSystem)}/L + <Term abbr="GA₃" /> (10 μM)
			</li>
			<li>
				<span class="step-number">Step 3</span>
				<strong>Note:</strong> GA₃ replaces PBZ to synchronously elongate microshoots
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Continue same immersion cycle (3h : 3min).
			</li>
			<li>
				<span class="step-number">Step 5</span>
				After <Timer duration={3628800} label="Elongation">6 weeks</Timer>, regeneration rate reaches <strong>30:1</strong>.
			</li>
			<li>
				<span class="step-number">Step 6</span>
				Shoots should be ≥3 cm long for acclimatization.
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="Stage 4: Acclimatization (6 weeks)">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Remove shoots ≥3 cm from TIS containers.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Gently rinse shoots in tap water to remove residual medium.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				Transfer to trays of 128 cells (60 cm³ each).
			</li>
			<li>
				<span class="step-number">Step 4</span>
				<strong>Substrate:</strong> 2:1:1 (v:v:v) Plantmax® HA : pine bark : carbonized rice coat
			</li>
			<li>
				<span class="step-number">Step 5</span>
				Place trays in greenhouse with controlled mist and 50% shade.
			</li>
			<li>
				<span class="step-number">Step 6</span>
				Weekly spray with ¼ <Term abbr="MS" /> salts solution.
			</li>
			<li>
				<span class="step-number">Step 7</span>
				<strong>Duration:</strong> <Timer duration={3628800} label="Acclimatization">6 weeks</Timer>
			</li>
			<li>
				<span class="step-number">Step 8</span>
				<strong>Expected survival:</strong> High rate due to improved TIS-grown plantlet quality
			</li>
		</ol>
	</ContentBlock>

	<ContentBlock title="TIS Maintenance & Troubleshooting">
		<table>
			<thead>
				<tr>
					<th>Issue</th>
					<th>Cause</th>
					<th>Solution</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Medium turns dark brown</td>
					<td>Normal phenolic oxidation</td>
					<td>Replace medium after 6 weeks</td>
				</tr>
				<tr>
					<td>Hyperhydricity (glassy shoots)</td>
					<td>Too much immersion</td>
					<td>Reduce immersion time to 2 min or check drainage</td>
				</tr>
				<tr>
					<td>Slow growth</td>
					<td>Insufficient nutrients</td>
					<td>Replace medium more frequently (4 weeks)</td>
				</tr>
				<tr>
					<td>Contamination</td>
					<td>Air filter failure</td>
					<td>Check 0.22 μm filters, replace if needed</td>
				</tr>
				<tr>
					<td>Uneven multiplication</td>
					<td>Poor air distribution</td>
					<td>Ensure shoots not clumped, redistribute evenly</td>
				</tr>
				<tr>
					<td>Roots forming too early</td>
					<td>Low cytokinin</td>
					<td>Normal - continue protocol, prune to 1cm at transplant</td>
				</tr>
			</tbody>
		</table>
	</ContentBlock>

	<ContentBlock title="Protocol Timeline & Multiplication">
		<table>
			<thead>
				<tr>
					<th>Stage</th>
					<th>Duration</th>
					<th>System</th>
					<th>Result</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Induction</td>
					<td>8 weeks</td>
					<td>Conventional liquid</td>
					<td>5-8 shoots per bud</td>
				</tr>
				<tr>
					<td>TIS Multiplication</td>
					<td>12 weeks (2×6)</td>
					<td>TIS with PBZ (6 μM)</td>
					<td>Massive proliferation</td>
				</tr>
				<tr>
					<td>TIS Elongation</td>
					<td>6 weeks</td>
					<td>TIS with GA₃ (10 μM)</td>
					<td>30:1 multiplication rate</td>
				</tr>
				<tr>
					<td>Acclimatization</td>
					<td>6 weeks</td>
					<td>Ex vitro</td>
					<td>High survival</td>
				</tr>
				<tr>
					<td><strong>Total</strong></td>
					<td><strong>32 weeks</strong></td>
					<td colspan="2"><strong>30-fold increase per cycle</strong></td>
				</tr>
			</tbody>
		</table>
	</ContentBlock>

	<ContentBlock title="Key Success Factors">
		<ul>
			<li><strong>Precise timing:</strong> 3h:3min cycle is critical - do not alter without testing</li>
			<li><strong>PBZ concentration:</strong> 6 μM produces compact microshoots ideal for mass multiplication</li>
			<li><strong>Medium renewal:</strong> Replace every 6 weeks to prevent nutrient depletion</li>
			<li><strong>GA₃ synchronization:</strong> Switching to GA₃ synchronizes elongation of all shoots</li>
			<li><strong>Air filtration:</strong> Always use 0.22 μm filters to prevent contamination</li>
			<li><strong>Drainage verification:</strong> Ensure complete drainage between cycles to prevent waterlogging</li>
			<li><strong>Cluster distribution:</strong> Evenly distribute shoots in TIS container for uniform growth</li>
			<li><strong>Economic advantage:</strong> 30:1 rate makes TIS highly cost-effective for commercial production</li>
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

	.warning-box {
		background: #fff3cd;
		border-left: 4px solid #ff9800;
		padding: 1.25rem;
		margin: 1rem 0;
	}
	
	.warning-box strong {
		display: block;
		margin-bottom: 0.5rem;
		color: #ff9800;
	}
	
	.warning-box p {
		margin: 0;
		line-height: 1.6;
	}
</style>
