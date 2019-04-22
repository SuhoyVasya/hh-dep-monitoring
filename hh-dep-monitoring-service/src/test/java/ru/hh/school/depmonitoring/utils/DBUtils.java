package ru.hh.school.depmonitoring.utils;

import org.hibernate.SessionFactory;
import org.springframework.transaction.annotation.Transactional;
import ru.hh.school.depmonitoring.dto.RelationDto;
import ru.hh.school.depmonitoring.dto.RepositoryDto;
import ru.hh.school.depmonitoring.entities.Relation;
import ru.hh.school.depmonitoring.service.mapper.RelationMapper;
import ru.hh.school.depmonitoring.entities.RepositoryLink;
import ru.hh.school.depmonitoring.service.mapper.RepositoryLinkMapper;
import ru.hh.school.depmonitoring.service.mapper.RepositoryMapper;

import javax.annotation.Nonnull;
import javax.inject.Named;
import javax.inject.Singleton;
import javax.persistence.Table;
import java.util.List;
import java.util.Optional;
import java.util.function.Supplier;

@Named
@Singleton
public class DBUtils {

    private final RelationMapper relationMapper;
    private final RepositoryMapper repositoryMapper;
    private final RepositoryLinkMapper repositoryLinkMapper;
    private final SessionFactory sessionFactory;

    public DBUtils(
            RelationMapper relationMapper,
            RepositoryMapper repositoryMapper,
            RepositoryLinkMapper repositoryLinkMapper,
            SessionFactory sessionFactory
    ) {
        this.relationMapper = relationMapper;
        this.repositoryMapper = repositoryMapper;
        this.repositoryLinkMapper = repositoryLinkMapper;
        this.sessionFactory = sessionFactory;
    }

    @Transactional
    public int cleanTable(@Nonnull Class clazz) {
        Table tableAnnotation = (Table) clazz.getAnnotation(Table.class);
        String tableName = tableAnnotation.name();
        return sessionFactory
                .getCurrentSession()
                .createNativeQuery("truncate table " + tableName + " RESTART IDENTITY CASCADE")
                .executeUpdate();
    }

    @Transactional
    public void fillRepositoryTable() {
        List<RepositoryDto> repositoryDtoList = StructCreator.createRepositoryDtoList();
        for (RepositoryDto dto : repositoryDtoList) {
            sessionFactory.getCurrentSession().persist(repositoryMapper.toEntity(dto));
        }
    }

    private Relation addRelation(RelationDto relationDto) {
        Relation result = relationMapper.toEntity(relationDto);
        sessionFactory.getCurrentSession().persist(result);
        return result;
    }

    @Transactional
    public Relation addRelation() {
        return addRelation(StructCreator.createRelationDto(null));
    }

    @Transactional
    public Relation addRelation(long from, long to) {
        return addRelation(StructCreator.createRelationDto(null, from, to));
    }

    @Transactional
    public void addItemToRepositoryTable(long id) {
        sessionFactory
                .getCurrentSession()
                .persist(repositoryMapper
                        .toEntity(StructCreator.createRepositoryDto(id)));
    }

    @Transactional
    public void addItemToRepositoryLinkTable(long repId) {
        sessionFactory
                .getCurrentSession()
                .save(repositoryLinkMapper
                        .toEntity(StructCreator.createRepositoryLinkDto(repId)));
    }

    @Transactional
    public Optional<Integer> getFirstExistingIdOfrepositoryLink() {
        List<RepositoryLink> resultList = sessionFactory
                .getCurrentSession()
                .createQuery("from RepositoryLink", RepositoryLink.class)
                .setMaxResults(1)
                .list();

        if (resultList.isEmpty()) {
            return Optional.empty();
        }
        return Optional.of(resultList.get(0).getRepositoryLinkId());
    }

    @Transactional
    public <T> T doInTransaction(Supplier<T> supplier) {
        return supplier.get();
    }
}
