import DriftSimImg from '../images/drift-simulation.png';
import DriftSimPoster from '../images/drift-simulation-poster.png';
import DriftSimVid from '../images/drift-simulation.mp4';

import CubeSolverImg from '../images/cube-solver.png'
import CubeSolverPoster from '../images/cube-solver-poster.png'
import CubeSolverVid from '../images/cube-solver.mp4'

import RayTracerIslandImg from '../images/ray-tracer-island.png'
import RayTracerDuckImg from '../images/ray-tracer-duck.png'

import FlockingSimImg from '../images/flocking-simulation.png'
import FlockingSimPoster from '../images/flocking-simulation-poster.png'
import FlockingSimVid from '../images/flocking-simulation.mp4'

import PolygonUtilImg from '../images/polygon-utilities.png';
import PolygonUtilPoster from '../images/polygon-utilities-poster.png';
import PolygonUtilVid from '../images/polygon-utilities.mp4';

import AsciiCameraImg from '../images/ascii-camera.png';
import AsciiCameraZoomedImg from '../images/ascii-camera-zoomed.png';
import AsciiCameraPoster from '../images/ascii-camera-poster.png';
import AsciiCameraVid from '../images/ascii-camera.mp4';

import InterQuadTreeImg from '../images/interactive-quadtree.png';
import InterQuadTreePoster from '../images/interactive-quadtree-poster.png';
import InterQuadTreeVid from '../images/interactive-quadtree.mp4';

import RaindropSimImg from '../images/raindrop-simulation.png';
import RaindropSimPoster from '../images/raindrop-simulation-poster.png';
import RaindropSimVid from '../images/raindrop-simulation.mp4';

// import PoolToolImg from '../images/pool-tool.png';

export const projectsData = [
	{
		title: 'Drift Simulation',
		category: '',
		cover_image: DriftSimImg,
		url_id: 'drift-simulation',
		publish_date: 'March 2023',
		page_images : [
		],
		page_videos : [
			{
				poster: DriftSimPoster,
				video: DriftSimVid,
			}
		],
		technologies: [
			'C++',
			'OpenGL',
			'GLSL',
		],
		project_details: [
			'The drift simulation uses 3D Perlin noise to randomly generate a landscape of colors and shapes that evolves over time. This project is inspired by the macOS Drift screensaver. Each line\'s rotation, length, width, and color are derived from 3D Perlin noise implemented in the shaders.',
		],
		github_link: 'https://github.com/mikee478/drift-simulation'
	},
	{
		title: 'Rubik\'s Cube Solver',
		category: '',
		cover_image: CubeSolverImg,
		url_id: 'rubiks-cube-solver',
		publish_date: 'September 2019',
		page_images : [],
		page_videos : [
			{
				poster: CubeSolverPoster,
				video: CubeSolverVid
			}
		],
		technologies: [
			'Python',
			'PyQt',
			'OpenGL',
		],
		project_details: [
			'Working alongside two talented students, the virtual Rubik\'s cube solver was developed in just 24 hours during the Stony Brook University 2019 hackathon, SBUHacks 2019. Our Rubik\'s cube solver utilizes the popular CFOP (Cross, F2L, OLL, PLL) method for solving the cube. We took on this challenge and were able to solve the Rubik\'s cube in an average of just 90 moves.',
		],
		github_link: 'https://github.com/mikee478/cube-solver'
	},
	{
		title: 'Ray Tracer',
		category: '',
		cover_image: RayTracerIslandImg,
		url_id: 'ray-tracer',
		publish_date: 'December 2022',
		page_images : [
			RayTracerDuckImg,
			RayTracerIslandImg
		],
		page_videos : [],
		technologies: [
			'C++',
			'OpenCV',
		],
		project_details: [
			'Capable of producing realistic images by tracing the path of light rays as they interact with objects in a scene.',
			'Implemented Phong shading, shadows, antialiasing, reflection, refraction, mesh rendering, texture mapping, and bounding volume hierarchy.'
		],
		github_link: ''
	},
	{
		title: 'Flocking Simulation',
		category: '',
		cover_image: FlockingSimImg,
		url_id: 'flocking-simulation',

		publish_date: 'March 2023',
		page_images : [],
		page_videos : [
			{
				poster: FlockingSimPoster,
				video: FlockingSimVid
			}
		],
		technologies: [
			'C++',
			'OpenGL',
			'GLSL',
		],
		project_details: [
			'The Boids simulation is a computer program that simulates the flocking behavior of birds, fish, or other animals. It was first introduced by computer scientist Craig Reynolds in 1986.',
			'The simulation models the behavior of individual animals as "boids" (short for bird-oids). Each boid follows three simple rules:',
			'-Separation: Avoid collisions with nearby boids',
			'-Alignment: Align with the average direction of nearby boids',
			'-Cohesion: Move towards the average position of nearby boids',
			'These rules are implemented by calculating the forces that act on each boid based on the positions and velocities of nearby boids, and updating the position and velocity of each boid accordingly. By following these rules, the boids can exhibit complex and realistic flocking behavior.',
			'The Boids simulation has found applications in a variety of fields, including robotics, computer graphics, and artificial intelligence. It has been used to design autonomous robots that can navigate and communicate with each other, to create realistic simulations of crowds and traffic, and to study the behavior of social animals such as ants and bees.'
		],
		github_link: 'https://github.com/mikee478/boids'
	},
	{
		title: 'ASCII Camera',
		category: '',
		cover_image: AsciiCameraImg,
		url_id: 'ascii-camera',

		publish_date: 'March 2023',
		page_images : [
			AsciiCameraZoomedImg
		],
		page_videos : [
			{
				poster: AsciiCameraPoster,
				video: AsciiCameraVid
			}
		],
		technologies: [
			'C++',
			'OpenGL',
			'GLSL'
		],
		project_details: [
			'An ASCII camera is a type of camera that captures images using ASCII characters instead of pixels. ASCII stands for American Standard Code for Information Interchange, which is a character encoding system used to represent text in computers. ASCII cameras work by converting the light and dark areas of an image into different ASCII characters. Each character represents a different shade of gray, ranging from light to dark. The resulting image would be a grid of ASCII characters, with each character representing a different shade of gray. While ASCII cameras are no longer commonly used for photography, they remain a popular tool for creating ASCII art, which is a form of digital art made entirely out of ASCII characters.'
		],
		github_link: 'https://github.com/mikee478/ascii-camera'		
	},
	{
		title: 'Raindrop Simulation',
		category: '',
		cover_image: RaindropSimImg,
		url_id: 'raindrop-simulation',

		publish_date: 'June 2023',
		page_images : [
		],
		page_videos : [
			{
				poster: RaindropSimPoster,
				video: RaindropSimVid
			}
		],
		technologies: [
			'Python',
			'OpenCV',
			'NumPy'
		],
		project_details: [
			'The Raindrop Simulation project is a captivating, yet simple implementation of water dynamics, based on Hugo Elias\' article titled "2D Water." This simulation offers a mesmerizing visual representation of raindrops interacting with a 2D grid that represents the water\'s height at various locations. What makes this simulation unique is its ability to achieve realistic water movement without the use of trigonometric functions or differential equations.',
			'At its core, the simulation employs a straightforward yet effective approach to update the water\'s height and simulate its behavior. The 2D grid serves as a canvas where the height of the water is depicted at each discrete location. The simulation dynamically evolves by iterating over each grid cell, recalculating the water\'s height based on neighboring cells and estimated velocity.',
			'To update the water\'s height at a particular grid cell, the simulation computes the average height of its neighboring cells. This collective average serves as a foundation for the height update. Additionally, the simulation introduces the concept of estimated velocity, which is determined by subtracting the current height from the previous height. By incorporating this velocity component, the simulation emulates the movement and flow of water.',
			'The utilization of the average height of neighboring cells, coupled with the estimated velocity, results in a visually striking representation of raindrop behavior. As raindrops interact with the grid, their impact creates ripples that propagate and merge with adjacent ripples, producing an intricate and captivating water simulation.',
			'Furthermore, this project offers the flexibility to explore alternative methods beyond averaging the heights of neighboring cells, enabling the generation of unique visual effects. By incorporating different averaging techniques, the simulation can create a wave-like behavior in the water. These waves can propagate through the grid, interacting with the raindrops and producing mesmerizing patterns. Additionally, by experimenting with alternative approaches, the simulation can also achieve abstract artistic effects, transforming the representation of water into a visually captivating and imaginative display.'
		],
		github_link: 'https://github.com/mikee478/raindrop-simulation'
	},
	{
		title: 'Polygon Utilities',
		category: '',
		cover_image: PolygonUtilImg,
		url_id: 'polygon-utilities',

		publish_date: 'November 2022',
		page_images : [],
		page_videos : [
			{
				poster: PolygonUtilPoster,
				video: PolygonUtilVid
			}
		],
		technologies: [
			'Python',
			'PyGame',
		],
		project_details: [
			'A simple tool to build simple polygons!',
			'Includes counter clockwise testing, self-intersection testing, point in polygon testing (winding number, ray casting), ear clipping triangulation, sample points within a polygon (rejection sampling, triangulation sampling), convex hull algorithms (gift wrapping, Graham\'s scan), and visibility polygon',
		],
		github_link: 'https://github.com/mikee478/polygon-utilities'
	},
	// {
	// 	title: 'Pool Tool',
	// 	category: '',
	// 	cover_image: PoolToolImg,
	// 	url_id: 'pool-tool',

	// 	publish_date: 'August 2022',
	// 	page_images : [
	// 		PoolToolImg
	// 	],
	// 	page_videos : [

	// 	],
	// 	technologies: [
	// 		'Python',
	// 		'OpenCV',
	// 		'NumPy'
	// 	],
	// 	project_details: [
	// 		'Shot assist for GamePigeon 8-ball on iPhone.'
	// 	]
	// },
	{
		title: 'Interactive Quadtree',
		category: '',
		cover_image: InterQuadTreeImg,
		url_id: 'interactive-quadtree',

		publish_date: 'November 2022',
		page_images : [
		],
		page_videos : [
			{
				poster: InterQuadTreePoster,
				video: InterQuadTreeVid
			}
		],
		technologies: [
			'Python',
			'PyGame',
			'NumPy'
		],
		project_details: [
			'A point quadtree is a data structure used to store and efficiently search for points in a two-dimensional space. It is a hierarchical tree structure where each node represents a square region in the space, and points are stored at the leaf nodes of the tree.',
			'Each node in the tree has four children, corresponding to the four quadrants of the square region represented by the node. The tree is built recursively by subdividing each square region into four smaller squares until each leaf node contains at most one point.',
			'To search for a point in the quadtree, the search starts at the root node and recursively descends the tree, choosing the appropriate child node at each level based on the quadrant in which the search point lies. The search terminates when a leaf node containing the point is reached or when an empty node is encountered.',
			'Point quadtree is commonly used in various applications such as geographic information systems, computer graphics, and computer vision. It provides an efficient way to search for nearest neighbors, range search, and spatial indexing.'
		],
		github_link: 'https://github.com/mikee478/interactive-quadtree'
	},
];
