export default {
  getMany: (req, res) => {
    res.send({ msg: 'Get Many Items' })
  },
  createOne: (req, res) => {
    res.send({ msg: 'Create New Item' })
  },
  getOne: (req, res) => {
    res.send({ msg: 'Get Item by ID' })
  },
  updateOne: (req, res) => {
    res.send({ msg: 'Update Item by ID' })
  },
  removeOne: (req, res) => {
    res.send({ msg: 'Delete Item by ID' })
  },
}
