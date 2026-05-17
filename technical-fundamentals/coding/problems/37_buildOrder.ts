// 7. *Build Order*:

// You are given a list of projects and a list of dependencies
// (which is a list of pairs of projects, where the second project is
// dependent on the first project). All of a project's dependencies
// must be built before the project is. Find a build order that will allow
// the projects to be built. If there is no valid build order, return an error.

// ```
// EXAMPLE Input:
// projects: a, b, c, d, e, f
// dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
// Output: e, f, a, b, d, c
// ```


export default function buildOrder(
  projects: string[],
  dependencies: string[][],
): string[] {
  const projectSet = new Set(projects);
  const prereq = new Map<string, string[]>();

  for (const project of projects) {
    prereq.set(project, []);
  }

  for (const [before, after] of dependencies) {
    if (!projectSet.has(before) || !projectSet.has(after)) {
      throw new Error("/No valid build order exists/");
    }
    prereq.get(after)!.push(before);
  }

  const output: string[] = [];
  const visit = new Set<string>();
  const cycle = new Set<string>();

  function dfs(crs: string): boolean {
    if (cycle.has(crs)) return false;
    if (visit.has(crs)) return true;

    cycle.add(crs);
    for (const pre of prereq.get(crs)!) {
      if (!dfs(pre)) return false;
    }
    cycle.delete(crs);
    visit.add(crs);
    output.push(crs);
    return true;
  }

  const sorted = [...projects].sort((a, b) => {
    const diff = prereq.get(a)!.length - prereq.get(b)!.length;
    return diff !== 0 ? diff : projects.indexOf(a) - projects.indexOf(b);
  });

  for (const project of sorted) {
    if (!dfs(project)) {
      throw new Error("/No valid build order exists/");
    }
  }

  return output;
}
