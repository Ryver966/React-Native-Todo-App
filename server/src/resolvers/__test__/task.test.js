const { task } = require("../task")

let createTaskId

describe('Task', async () => {
  it('successfully gets task by id', async () => {
    const { id, title, user_id} = await task.byId(1)

    expect(id).toEqual(1)
    expect(title).toBeDefined()
    expect(user_id).toBeDefined()
  })

  it('returns undefined if the task does not exist', async () => {
    const res = await task.byId(999999)

    expect(res).toBeUndefined()
  })

  it('successfully creates new task if provided with needed data and returns new id', async () => {
    const randomString = Math.random()
      .toString(24)
      .substring(7)

      createTaskId = await task.create({
      title: randomString,
      description: randomString,
      user_id: 1
    })

    expect(createTaskId).toBeDefined()
    expect(createTaskId).toBeGreaterThan(0)
  })

  it('does not work if trying to create task with incorrect data', async () => {
    const { name } = await task.create({ title: null, description: 'zxc', user_id: 1 })

    expect(name).toEqual("error")
  })

  it('gets all tasks from database', async () => {
    const tasks = await task.all();
    tasks.forEach(task => {
      expect(task).toHaveProperty('id');
      expect(task).toHaveProperty('title');
      expect(task).toHaveProperty('user_id');
    });
    expect(tasks).toBeInstanceOf(Array);
  })

  it('removes task from the database, consuming id as a param', async () => {
    const result = await task.remove(createTaskId);
    expect(result).toEqual(createTaskId);
    const getTask = await task.byId(createTaskId);
    expect(getTask).toBeUndefined();
  });
})