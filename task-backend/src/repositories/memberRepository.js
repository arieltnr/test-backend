const { where } = require('sequelize');
const Member = require('../entities/member');

class MemberRepository {

    async findAll() {
        return await Member.findAll();
    }

    async findById(code) {
        return await Member.findById(code);
    }

    async create(member) {
        return await Member.create(member);
    }

    async update(code, updates) {
        return await Member.update(updates, { where: { code } });
    }
}

module.exports = new MemberRepository();