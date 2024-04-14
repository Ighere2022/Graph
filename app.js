function dijkstra(graph, start) {
  const distances = {};
  const visited = {};
  const queue = [];

  for (let vertex in graph) {
    distances[vertex] = Infinity;
  }
  distances[start] = 0;

  // Push the start vertex to the queue
  queue.push({ vertex: start, distance: 0 });

  while (queue.length > 0) {
    const { vertex, distance } = queue.shift();

    if (visited[vertex]) continue;

    // Mark the vertex as visited
    visited[vertex] = true;

    // Update distances to adjacent vertices
    for (let neighbor in graph[vertex]) {
      const newDistance = distance + graph[vertex][neighbor];
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        // Push the neighbor to the queue with its updated distance
        queue.push({ vertex: neighbor, distance: newDistance });
        // Sort the queue based on distances
        queue.sort((a, b) => a.distance - b.distance);
      }
    }
  }

  // Return the shortest distances object
  return distances;
}
