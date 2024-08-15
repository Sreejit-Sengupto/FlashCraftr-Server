import { Roles } from '../types/Roles';

export const isAdmin = async (req: any, res: any, next: any) => {
    const role = req.query.role;

    if (role !== Roles.ADMIN) {
        return res.status(403).json({ message: 'Access forbidden' });
    }
    next();
};
