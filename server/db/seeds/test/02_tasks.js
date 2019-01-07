exports.seed = (kenx, _) =>
  kenx('tasks')
    .del() // Deletes ALL existing entries
    // Insert task seeds
    .then(() =>
      kenx('tasks').insert([
        {
          title: 'Test Task 1',
          description:
            'Praesent tincidunt eros ex, ac efficitur felis mollis ut. Aenean nec bibendum lorem. Sed dui eros, facilisis eu interdum a, volutpat et justo. Cras consequat arcu ante, non suscipit tellus mattis ut. Pellentesque porttitor libero et neque dictum, egestas sodales augue tempus. Sed sit amet dolor vel arcu dignissim accumsan ut nec lectus. Donec tempor eu quam vel sagittis. Sed sit amet massa in dui porttitor venenatis eu ut ipsum.',
          user_id: 1
        },
        {
          title: 'Test Task 2',
          user_id: 1
        },
        {
          title: 'Test Task 3',
          description:
            'Aenean nec bibendum lorem. Sed dui eros, facilisis eu interdum a, volutpat et justo. Cras consequat arcu ante, non suscipit tellus mattis ut. Pellentesque porttitor libero et neque dictum, egestas sodales augue tempus. Sed sit amet dolor vel arcu dignissim accumsan ut nec lectus. Donec tempor eu quam vel sagittis. Sed sit amet massa in dui porttitor venenatis eu ut ipsum.',
          user_id: 2
        },
      ])
    )