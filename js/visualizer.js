// Create an array to store the bar elements
const bars = [];

// Create the bar container element
const visualizerContainer = document.createElement('div');
visualizerContainer.classList.add('visualizer-container');

// Create 128 bar elements and append them to the container
for (let i = 0; i < 64; i++) {
  const bar = document.createElement('div');
  bar.classList.add('bar');
  visualizerContainer.appendChild(bar);
  bars.push(bar);
}

// Append the visualizer container to the document body
document.body.appendChild(visualizerContainer);

// Function to update the visualizer based on audio data
function wallpaperAudioListener(audioArray) {
  // Calculate the step size for mapping the audio data to bar heights
  const stepSize = Math.ceil(audioArray.length / 128);

  // Update the height of each bar based on the audio data
  for (let i = 0; i < 64; i++) {
    // Calculate the average amplitude for the bar
    const startIndex = i * stepSize;
    const endIndex = startIndex + stepSize;
    const barAudioData = audioArray.slice(startIndex, endIndex);
    const averageAmplitude = barAudioData.reduce((sum, sample) => sum + Math.abs(sample), 0) / barAudioData.length;
	
	const scalingFactor = i < 12 ? 0.7 : 0.3;
    const scaledAmplitude = averageAmplitude * scalingFactor;

    // Set the height of the bar based on the average amplitude
    const barHeight = `${scaledAmplitude * 100}%`;
    bars[i].style.height = barHeight;
  }
}

// Register the audio listener
window.wallpaperRegisterAudioListener(wallpaperAudioListener);