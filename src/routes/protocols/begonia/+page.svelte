<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertVolume, convertWeight, displayPH } from '$lib/utils/unitConversions';
	
	const title = 'Begonia Species<br>General Protocol';
	const badges = [
		'Difficulty: Easy',
		'Success Rate: 75-85%',
		'Explant: Leaf / Petiole / Shoot Tip'
	];
	const introColumns = [
		'Begonias demonstrate exceptional responsiveness to tissue culture across multiple species. The genus exhibits high regenerative capacity from various explant types, including leaf sections, petioles, and shoot tips.',
		'This protocol is particularly effective for Begonia rex and related ornamental species. Leaf section culture produces numerous shoots from a single explant, enabling rapid multiplication.',
		'Many begonia varieties maintain their variegation patterns through tissue culture. However, long-term cultures should be monitored for somaclonal variation, which can alter leaf patterns and growth characteristics.'
	];
	const source = '';
</script>

<svelte:head>
	<title>Begonia Protocol - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
	<ContentBlock title="Sterilization Protocol">
		<ol class="step-list">
			<li>
				<span class="step-number">Step 1</span>
				Wash explants with tap water and liquid soap. Duration: <Timer duration={900} label="Soap Wash">10-15 minutes</Timer>.
			</li>
			<li>
				<span class="step-number">Step 2</span>
				Rinse thoroughly with running tap water. Duration: <Timer duration={300} label="Tap Water Rinse">5 minutes</Timer>.
			</li>
			<li>
				<span class="step-number">Step 3</span>
				Surface sterilize with 1.0-1.5% sodium hypochlorite plus 2-3 drops Tween 20. Duration: <Timer duration={900} label="Surface Sterilization">10-15 minutes</Timer>.
			</li>
			<li>
				<span class="step-number">Step 4</span>
				Rinse with sterile water multiple times. Washes: 3-4 times, <Timer duration={300} label="Sterile Water Rinse">5 minutes</Timer> each.
			</li>
			<li>
				<span class="step-number">Step 5</span>
				Optional: Brief 70% ethanol rinse for <Timer duration={30} label="Ethanol Rinse">30 seconds</Timer> for additional sterilization.
			</li>
		</ol>
	</ContentBlock>
	
	<ContentBlock title="Media Formulations">
		<table>
			<thead>
				<tr>
					<th>Stage</th>
					<th>Components & Conditions</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><strong>Stage I</strong><br>Callus/Shoot Induction</td>
					<td>MS {convertWeight(4.44, $unitSystem)}/L • Sucrose {convertWeight(30, $unitSystem)}/L • BAP 1.0-3.0 mg/L • NAA 0.1-0.5 mg/L • Agar {convertWeight(7, $unitSystem)}-{convertWeight(8, $unitSystem)}/L • {displayPH(5.7)}-{displayPH(5.8)}<br><em>Begonias respond particularly well to cytokinin-heavy medium</em></td>
				</tr>
				<tr>
					<td><strong>Stage II</strong><br>Shoot Multiplication</td>
					<td>MS {convertWeight(4.44, $unitSystem)}/L • Sucrose {convertWeight(30, $unitSystem)}/L • BAP 1.0-2.0 mg/L • NAA 0.1 mg/L • Agar {convertWeight(7, $unitSystem)}/L • {displayPH(5.7)}-{displayPH(5.8)}<br><em>Lower hormone concentrations promote shoot elongation</em></td>
				</tr>
				<tr>
					<td><strong>Stage III</strong><br>Rooting</td>
					<td>MS {convertWeight(2.22, $unitSystem)}/L (half-strength) • Sucrose {convertWeight(20, $unitSystem)}/L • NAA 0.5-1.0 mg/L • Agar {convertWeight(7, $unitSystem)}/L • {displayPH(5.7)}-{displayPH(5.8)}<br><em>Begonias root easily with low auxin concentration</em></td>
				</tr>
			</tbody>
		</table>
	</ContentBlock>
	
	<ContentBlock title="Culture Conditions & Notes" columns={2}>
		<div>
			<p><strong>Temperature:</strong> {convertTemp(22, $unitSystem)}-{convertTemp(26, $unitSystem)}</p>
			<p><strong>Light:</strong> 16-hour photoperiod, 2000-3500 lux</p>
			<p><strong>Humidity:</strong> 60-70%</p>
			<p><strong>Subculture:</strong> Every 3-4 weeks</p>
		</div>
		<div>
			<p><strong>Special Considerations:</strong></p>
			<ul>
				<li>Leaf section culture particularly effective for B. rex</li>
				<li>Monitor for somaclonal variation in long-term cultures</li>
				<li>Many varieties maintain variegation through tissue culture</li>
				<li>Highly responsive to tissue culture techniques</li>
			</ul>
		</div>
	</ContentBlock>
</ProtocolLayout>
